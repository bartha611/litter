<?php

namespace App\Repository\Eloquent;

use Illuminate\Support\Facades\DB;
use App\Repository\FollowerRepositoryInterface;

class FollowerRepository implements FollowerRepositoryInterface {

    /**
     * Finds all followers of user_id $id
     * 
     * @param Integer $id
     * @return Array $answer
     */
    public function findFollowersById($id)
    {
        $answer = DB::table('followers')
            ->select('follower_id')
            ->where('user_id', $id)
            ->pluck('follower_id')
            ->toArray();

        return $answer;
    }

    public function followerTempTable() 
    {
        $result = DB::table('followers')
            ->select(['user_id', DB::raw('COUNT(*) AS followers_count')])
            ->groupBy('user_id');
        
        return $result;

    }

}