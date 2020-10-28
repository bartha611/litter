<?php

namespace App\Repository\Eloquent;

use App\Repository\ReplyRepositoryInterface;
use App\Tweet;
use Illuminate\Support\Facades\DB;
use Staudenmeir\LaravelCte\Query\Builder;

class ReplyRepository implements ReplyRepositoryInterface {
    protected $follower_repo;
    protected $tweet_repo;

    public function __construct(FollowerRepository $follower_repo, TweetRepository $tweet_repo)
    {
        $this->follower_repo = $follower_repo; 
        $this->tweet_repo = $tweet_repo;
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
     * Returns parent tweets of reply
     * 
     * @param String $tweet_id Tweet id
     * @param String $user_id User id
     */

    public function findParentTweets($tweet_id, $user_id)
    {
        $query = DB::table('tweets AS t')
            ->select(["*"])
            ->where('t.id', $tweet_id)
            ->unionAll(
                DB::table('tweets')
                    ->select(["tweets.*"])
                    ->join('tree', 'tree.reply_tweet_id', '=', 'tweets.id')
            );

        $ids = DB::table('tree')
            ->withRecursiveExpression('tree', $query)
            ->pluck('id')
            ->toArray();

        return $ids;
    }

}