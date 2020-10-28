<?php

namespace App\Repository\Eloquent;

use App\Repository\TweetRepositoryInterface;
use App\Tweet;
use Illuminate\Support\Facades\DB;

class TweetRepository implements TweetRepositoryInterface {

    protected $likes_repo;
    protected $follower_repo;
    protected $replies_repo;

    public function __construct(LikesRepository $likes_repo, FollowerRepository $follower_repo, ReplyRepository $replies_repo)
    {
        $this->likes_repo = $likes_repo;
        $this->follower_repo = $follower_repo;
        $this->replies_repo = $replies_repo;
    }

    /**
     * Returns a table with columns user_id and retweets_count
     * 
     * @return \Illuminate\Database\Query\Builder
     */

    public function retweetTempTable()
    {
        $builder = DB::table('tweets AS t')
            ->select([
                't.retweet_id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo',
                DB::raw('COUNT(*) AS retweets_count')])
            ->join('tweets AS tu', 'tu.id', '=', 't.retweet_id')
            ->join('users AS u', 'u.id', '=', 'tu.user_id')
            ->groupby(['t.retweet_id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo']);

        return $builder;
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
     * Stores tweet 
     * 
     * @param Mixed $data user id and tweet text
     * @return Mixed $tweet Tweet object created
     */

    public function store($data)
    {
        $tweet = Tweet::create($data)->load('user:id,name,username,profile_photo');
        unset($tweet->user_id);
        return $tweet;
    }

    /**
     * Deletes tweet 
     * 
     * @param Integer $id Id of tweet
     */

    public function delete($id) 
    {
        Tweet::destroy($id);
        return $id;
    }

    /**
     * Updates a tweet
     * 
     * @param Integer $id Tweet id
     * @param String $tweet updated tweet 
     */

    public function update($id, $tweet)
    {
        $answer = Tweet::find($id);
        $answer->tweet = $tweet;
        $answer = $answer->load('user:id,name,username,profile_photo');
        unset($answer->user_id);
        return $answer;
    }

    /**
     * returns a query builder for tweets.  Provides counts for retweets, replies, and likes.
     * 
     * @param String $user_id Logged-in user id
     * @return \Illuminate\Database\Query\Builder
     */

    public function getTweets($user_id) 
    {
        $liked_tweets = $this->likes_repo->findUserLikedTweets($user_id);

        $tweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 't.updated_at','t.user_id', 'u.profile_photo', 'u.name', 'u.username',
                'rt.tweet AS retweet', 'rt.username AS retweet_username', 'rt.name AS retweet_name',
                'rt.profile_photo AS retweet_profile_photo',
                DB::raw('COALESCE(rt.retweets_count,0) AS retweets_count'),
                DB::raw('COALESCE(ct.replies_count,0) AS replies_count'),
                DB::raw('COALESCE(lt.likes_count,0) AS likes_count'),
                DB::raw('CASE WHEN t.id IN (' . implode(',', $liked_tweets) . ') THEN 1 ELSE 0 END AS liked_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoinSub($this->likes_repo->likesTempTable(), 'lt', function($join) {
                $join->on('lt.tweet_id', '=', 't.id');
            })
            ->leftJoinSub($this->replies_repo->replyTempTable(), 'ct', function($join) {
                $join->on('ct.reply_tweet_id', '=', 't.id');
            })
            ->leftJoinSub($this->retweetTempTable(), 'rt', function($join) {
                $join->on('rt.retweet_id', '=', 't.id');
            })
            ->orderBy('t.id', 'desc');

        return $tweets;
    }

    /**
     * Returns news tweets for user 
     * 
     * @param Integer $id  user id
     * @param String $cursor  cursor for pagination
     * @param Boolean $news  determines whether to include followers
     * 
     * @return \Illuminate\Support\Collection $tweets
     */

    public function tweetNews($id, $cursor, $news)
    {

        if ($news) {
            $followers = $this->follower_repo->findFollowersById($id);
        } else {
            $followers = [];
        }

        #add user_id to followers
        array_merge($followers, [$id]);

        $tweets = $this->getTweets($id)
            ->whereIn('u.id', $followers)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->limit(40)
            ->get();

        return $tweets;
    } 
}