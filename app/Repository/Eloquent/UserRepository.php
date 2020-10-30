<?php

namespace App\Repository\Eloquent;

use Illuminate\Support\Facades\DB;
use App\Repository\UserRepositoryInterface;

class UserRepository implements UserRepositoryInterface {

    protected $table_repo;
    protected $follower_repo;

    public function __construct(TableRepository $table_repo, FollowerRepository $follower_repo)
    {
        $this->table_repo = $table_repo;
        $this->follower_repo = $follower_repo;
    }   

    /**
     * Finds user based on id 
     * @param String $name id or username being searched
     * @param String $id id of logged in user 
     * @return Object|null  
     */

    public function findUserWithCounts($name, $id)
    {
        $user_followers = $this->follower_repo->findFollowersById($id);
        array_push($user_followers, -1);


        $answer = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.username', 'u.profile_photo',
                DB::raw('COALESCE(lt.followers_count, 0) AS followers_count'),
                DB::raw('COALESCE(tu.tweets_count, 0) AS tweets_count'),
                DB::raw('CASE WHEN u.id IN (' . implode(",", $user_followers) . ') THEN 1 ELSE 0 END AS followed_user')
            ]) 
            ->leftJoinSub($this->table_repo->followerTempTable(), 'lt', function ($join) {
                $join->on('lt.user_id', '=', 'u.id');
            })
            ->leftJoinSub($this->table_repo->tweetUserTable(), 'tu', function ($join) {
                $join->on('tu.user_id', '=', 'u.id');
            })
            ->where('u.id', $name)
            ->orWhere('u.username', '=', $name)
            ->first();

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
            ->leftJoinSub($this->table_repo->followerTempTable(), 'lt', function ($join) {
                $join->on('lt.user_id', '=', 'u.id');
            })
            ->where('name', 'like', $search . '%')
            ->orderBy('followers_count', 'desc')
            ->limit(10)
            ->get();

        return $answer;
    }

}