<?php

namespace App\Repository\Eloquent;

use App\Notifications\createComment;
use App\Repository\ReplyRepositoryInterface;
use App\Tweet;
use App\User;
use Illuminate\Support\Facades\DB;

class ReplyRepository implements ReplyRepositoryInterface
{

    protected $follower_repo;
    protected $table_repo;

    public function __construct(FollowerRepository $follower_repo, TableRepository $table_repo)
    {
        $this->follower_repo = $follower_repo;
        $this->table_repo    = $table_repo;
    }

    /**
     * Creates a tweet reply
     * @param String $user_id User id of person replying
     * @param String $reply_tweet_id Tweet id that user is replying to
     * @param String $content Tweet content of reply
     */

    public function create($user_id, $reply_tweet_id, $content)
    {
        $tweet = Tweet::create(['user_id' => $user_id, 'reply_tweet_id' => $reply_tweet_id, 'tweet' => $content])
            ->load('user:id,username,name,profile_photo')
            ->loadCount(['replies', 'retweets', 'replies']);

        $user        = User::where('id', $user_id)->first();
        $reply_tweet = Tweet::where('id', $reply_tweet_id)->first();
        $reply_user  = User::where('id', $reply_tweet->user_id)->first();

        $reply_user->notify(new createComment($user, $tweet));

        return $tweet;
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

        $tweets = DB::table('tree')
            ->withRecursiveExpression('tree', $query)
            ->joinSub($this->table_repo->Tweets($user_id), 'lt', function ($join) {
                $join->on('lt.id', '=', 'tree.id');
            })
            ->orderBy('tree.id', 'asc')
            ->get();

        return $tweets;
    }

    /**
     * Finds reply tweets given tweet id
     *
     * @param String $tweet_id Tweet id
     * @param String $user_id User id of logged-in user.  Determines liked_tweet parameter
     */

    public function findChildTweets($tweet_id, $user_id, $cursor)
    {
        $tweets = $this->table_repo->Tweets($user_id)
            ->where('t.reply_tweet_id', $tweet_id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->limit(41)
            ->orderBy('t.id', 'desc')
            ->get();

        return $tweets;

    }

}
