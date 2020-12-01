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
     * @param String $user_id Logged in user id
     * @param String $following_id Follower user id
     * @return String $id of Follower table 
     */

    public function delete($follower_id)
    {
        Follower::where('id', $follower_id)->delete(); 
        return $follower_id;
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
        $followers = DB::table('followers AS f')
            ->select([
                'f.id', 'f.user_id AS follower_id', 'u.username', 'u.name', 'u.profile_photo','u.biography',
                'fu.id AS followed_user'
            ])
            ->join('users AS u', 'u.id', '=', 'f.user_id')
            ->leftJoin('followers AS fu', function ($join) use ($user_id) {
                $join->on('fu.following_id', '=', 'f.user_id')
                    ->where('fu.user_id', $user_id);
            })
            ->where('f.following_id', $id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('f.id', '<=', $cursor);
                }
            })
            ->orderBy('followed_user', 'desc')
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

        $following = DB::table('followers AS f')
            ->select([
                'f.id', 'f.following_id AS following_id', 'u.username', 'u.name', 'u.profile_photo', 'u.biography',
                'fu.id AS followed_user'
            ])
            ->join('users AS u', 'u.id', '=', 'f.following_id')
            ->leftJoin('followers AS fu', function ($join) use ($user_id) {
                $join->on('fu.following_id', '=', 'f.following_id')
                    ->where('fu.user_id', $user_id);
            })
            ->where('f.user_id', $id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('f.id', '<=', $cursor);
                }
            })
            ->orderBy('followed_user', 'desc')
            ->orderBy('f.id', 'desc')
            ->limit(21)
            ->get();

        return $following;
            
    }

}