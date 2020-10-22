<?php

namespace App\Repository\Eloquent;

use App\Repository\LikesRepositoryInterface;
use Illuminate\Support\Facades\DB;

class LikesRepository implements LikesRepositoryInterface {
    /**
     * Returns a table with columns tweet_id and likes_count
     * 
     * @return Illuminate\Database\Query\Builder
     *
     */

    public function likesTempTable()
    {
        $builder = DB::table('likes')
            ->select(['tweet_id', DB::raw('COUNT(*) AS likes_count')])
            ->groupBy('tweet_id');

        return $builder;
    }

    /**
     * Returns an array of user-liked tweet ids
     * 
     * @param Integer $id
     * @return Array $likes
     */

    public function findUserLikedTweets($id) {
        $likes = DB::table('likes AS l')
            ->select('tweet_id')
            ->where('user_id', $id)
            ->pluck('tweet_id')
            ->toArray();

        #push an impossible value to array to prevent a MySql error
        array_push($likes, -1);

        return $likes;
    }
}