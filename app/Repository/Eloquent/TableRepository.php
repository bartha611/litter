<?php

namespace App\Repository\Eloquent;

use App\Repository\TableRepositoryInterface;
use Illuminate\Support\Facades\DB;

class TableRepository implements TableRepositoryInterface {

    /**
     * Returns a table with columns user_id and followers_count
     * 
     */

    public function followerTempTable() 
    {
        $result = DB::table('followers')
            ->select(['user_id', DB::raw('COUNT(*) AS followers_count')])
            ->groupBy('user_id');
        
        return $result;

    }

    /**
     * Returns a table with columns user_id, tweets_count.  Replies not counted
     * 
     * @return \Illuminate\Database\Query\Builder
     */

    public function tweetUserTable()
    {
        $builder = DB::table('tweets AS t')
            ->select(['user_id', DB::raw('COUNT(*) AS tweets_count')])
            ->whereNull('reply_tweet_id')
            ->groupBy('user_id');
        
        return $builder;
    } 

    /**
     * Returns a table with columns user_id and retweets_count
     * 
     * @return \Illuminate\Database\Query\Builder
     */

    public function retweetTempTable()
    {
        $builder = DB::table('tweets AS t')
            ->select(['retweet_id', DB::raw('COUNT(*) AS retweets_count')])
            ->groupBy('retweet_id');

        return $builder;
    }

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
     * returns a query builder for tweets.  Provides counts for retweets, replies, and likes.
     * 
     * @param String $user_id Logged-in user id.  Determines whether tweet is liked by user
     * @return \Illuminate\Database\Query\Builder
     */

    public function Tweets($user_id) 
    {

        $liked_tweets = DB::table('likes')
            ->where('user_id', $user_id)
            ->pluck('tweet_id')
            ->toArray();

        $tweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 't.updated_at','t.user_id', 'u.profile_photo', 'u.name', 'u.username',
                'rtt.tweet AS retweet', 'rtu.username AS retweet_username', 'rtu.name AS retweet_name',
                'rtu.profile_photo AS retweet_profile_photo',
                DB::raw('COALESCE(rt.retweets_count,0) AS retweets_count'),
                DB::raw('COALESCE(ct.replies_count,0) AS replies_count'),
                DB::raw('COALESCE(lt.likes_count,0) AS likes_count'),
                DB::raw('CASE WHEN t.id IN (' . implode(',', $liked_tweets) . ') THEN 1 ELSE 0 END AS liked_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoinSub($this->likesTempTable(), 'lt', function($join) {
                $join->on('lt.tweet_id', '=', 't.id');
            })
            ->leftJoinSub($this->replyTempTable(), 'ct', function($join) {
                $join->on('ct.reply_tweet_id', '=', 't.id');
            })
            ->leftJoinSub($this->retweetTempTable(), 'rt', function ($join) {
                $join->on('rt.retweet_id', '=', 't.id');
            })
            ->leftJoin('tweets AS rtt', 'rtt.id', '=', 't.retweet_id')
            ->leftJoin('users AS rtu', 'rtu.id', '=', 'rtt.user_id');

        return $tweets;
    }
}