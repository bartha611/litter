<?php

namespace App\Repository\Eloquent;

use App\Follower;
use Illuminate\Support\Facades\DB;
use App\Repository\FollowerRepositoryInterface;

class FollowerRepository implements FollowerRepositoryInterface {

    /**
     * Creates follower given user_id and following_id
     * 
     * @param String $user_id id of logged-in user
     * @param String $following_id User id of person that will be followed
     */

    public function create($user_id, $following_id)
    {
        $follower = Follower::create(['user_id' => $user_id, 'following_id' => $following_id]);
        return $follower;
    }

    /**
     * Deletes a follower entry given id
     * 
     * @param String $id Follower table id
     * @return String $id of Follower table 
     */

    public function delete($id)
    {
        Follower::destroy($id);
        return $id;
    }

    /**
     * Finds follower ids of user
     * 
     * @param Integer $id user id being searched
     * @return Array $answer
     */

    public function findFollowersById($id)
    {
        $answer = DB::table('followers')
            ->select('following_id')
            ->where('user_id', $id)
            ->pluck('following_id')
            ->toArray();

        return $answer;
    }

    /**
     * Finds user's followers given id of user and id of logged-in user
     * 
     * @param String $id User id being searched
     * @param String $user_id Id of logged in user.  Determines whether logged in user already follows 
     * 
     */

    public function getFollowers($id, $user_id, $cursor)
    {

        $user_followers = $this->findFollowersById($user_id);

        $followers = DB::table('followers AS f')
            ->select([
                'f.id', 'f.user_id AS follower_id', 'u.username', 'u.name', 'u.profile_photo','u.biography',
                DB::raw('CASE WHEN f.following_id IN (' . implode(',', $user_followers) . ') THEN 1 ELSE 0 END AS followed_user')
            ])
            ->join('users AS u', 'u.id', '=', 'f.user_id')
            ->where('f.following_id', $id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('f.id', '<=', $cursor);
                }
            })
            ->orderBy('f.id', 'desc')
            ->limit(21)
            ->get();

        return $followers;
    }

    /**
     * Finds the people user is following
     * @param String $user_id Id of logged in user
     * @param String $id Id of person being searched
     */

    public function getFollowing($id, $user_id, $cursor)
    {
        $user_followers = $this->findFollowersById($user_id);

        $following = DB::table('followers AS f')
            ->select([
                'f.id', 'f.following_id AS following_id', 'u.username', 'u.name', 'u.profile_photo', 'u.biography',
                DB::raw('CASE WHEN f.following_id IN (' . implode(",", $user_followers) . ') THEN 1 ELSE 0 END followed_user')
            ])
            ->join('users AS u', 'u.id', '=', 'f.following_id')
            ->where('f.user_id', $id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('f.id', '<=', $cursor);
                }
            })
            ->orderBy('f.id', 'desc')
            ->limit(21)
            ->get();

        return $following;
            
    }

}