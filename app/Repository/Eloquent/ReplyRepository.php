<?php

namespace App\Repository\Eloquent;

use App\Repository\ReplyRepositoryInterface;
use Illuminate\Support\Facades\DB;
use Staudenmeir\LaravelCte\Query\Builder;

class ReplyRepository implements ReplyRepositoryInterface {

    /**
     * Returns a table with columns tweet_id and replies_count
     * 
     * @return Illuminate\Database\Query\Builder
     */

    public function replyTempTable()
    {
        $builder = DB::table('tweets')
            ->select(['reply_tweet_id', DB::raw('COUNT(*) AS replies_count')])
            ->groupBy('reply_tweet_id');

        return $builder;
    }

    /**
     * find replies based on tweet id
     * @param $id Id of tweet
     * @return Object|null 
     */

    public function findReplies($id)
    {
        
    }
}