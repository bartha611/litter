<?php

namespace App\Repository\Eloquent;

use Illuminate\Support\Facades\DB;
use App\Repository\UserRepositoryInterface;
use App\Repository\Eloquent\FollowerRepository;

class UserRepository implements UserRepositoryInterface {

    protected $follower_repo = null;
    protected $tweet_repo = null;

    public function __construct(FollowerRepository $follower_repo, TweetRepository $tweet_repo)
    {
        $this->follower_repo = $follower_repo;
        $this->tweet_repo = $tweet_repo;
    }   

    public function findUserById($id)
    {

        $answer = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.username', 'u.profile_photo',
                'COALESCE(follower_count, 0) AS follower_count'
            ]) 
            ->leftJoinSub($this->follower_repo->followerTempTable(), 'lt', function ($join) {
                $join->on('lt.user_id', '=', 'u.id');
            })
            ->where('user_id', $id);

        return $answer;
    }

    /**
     * Finds users based on search
     * 
     * @param string $search
     * @param string $id
     */

    public function findUsersBySearch($search, $id)
    {
        // push impossible value in case empty array
        $user_followers = $this->follower_repo->findFollowersById($id);

        array_push($user_followers, -1);

        $answer = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.username', 'u.profile_photo',
                DB::raw('COALESCE(followers_count, 0) AS followers_count'),
                DB::raw('CASE WHEN u.id IN ( ' . implode(",", $user_followers) . ') THEN 1 ELSE 0 END AS follower_user')
            ])
            ->leftJoinSub($this->follower_repo->followerTempTable(), 'lt', function ($join) {
                $join->on('lt.user_id', '=', 'u.id');
            })
            ->where('name', 'like', $search . '%')
            ->orderBy('followers_count', 'desc')
            ->limit(10)
            ->get();

        return $answer;
    }

    /**
     * Finds user with tweet and follower counts
     * 
     * @param String $name username of person being searched
     * @param Integer $id user id of the person conducting the search 
     * @return Object|Null $user returns a user object or null value
     */

    public function findUserWithCounts($name, $id)
    {
        $user_followers = $this->follower_repo->findFollowersById($id);

        $user = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.profile_photo', 'u.username',
                DB::raw('IFNULL(followers_count,0) AS followers_count'),
                DB::raw('IFNULL(tweets_count,0) AS tweets_count'),
                DB::raw('CASE WHEN u.id IN (' . implode(',', $user_followers) . ') THEN 1 ELSE 0 END AS followed_user')
            ])
            ->leftJoinSub($this->follower_repo->followerTempTable(), 'f', function ($join) {
                $join->on('f.user_id', '=', 'u.id');
            })
            ->leftJoinSub($this->tweet_repo->tweetUserTable(), 't', function ($join) {
                $join->on('t.user_id', '=', 'u.id');
            })
            ->where('username', $name)
            ->groupBy(['u.id', 'u.name', 'u.username', 'u.profile_photo'])
            ->first();

        return $user;
    }
}