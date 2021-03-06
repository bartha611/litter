<?php

namespace App\Repository\Eloquent;

use App\Repository\TweetRepositoryInterface;
use App\Tweet;
use Illuminate\Support\Facades\DB;

class TweetRepository implements TweetRepositoryInterface
{
    protected $table_repo;
    protected $follower_repo;

    public function __construct(TableRepository $table_repo, FollowerRepository $follower_repo)
    {
        $this->table_repo    = $table_repo;
        $this->follower_repo = $follower_repo;
    }

    /**
     * Get single tweet
     * @param String $id id of tweet
     * @return Object|null
     */

    public function getTweet($id)
    {
        return Tweet::where('id', $id);
    }

    /**
     * Stores tweet
     *
     * @param Mixed $data user id and tweet text
     * @return Mixed $tweet Tweet object created
     */

    public function create($data)
    {
        $tweet = Tweet::create($data)
            ->load('user:id,name,username,profile_photo')
            ->loadCount(['retweets', 'replies', 'likes']);
        $tweet->liked_tweet = 0;
        unset($tweet->user_id);
        return $tweet;
    }

    /**
     * Returns news tweets for user
     *
     * @param Integer $user_id  user id
     * @param String $cursor  cursor for pagination
     * @param Boolean $news  determines whether to include followers
     *
     * @return \Illuminate\Support\Collection $tweets
     */

    public function read($user_id, $cursor, $news)
    {

        if ($news) {
            $followers = $this->follower_repo->findFollowersById($user_id);
        } else {
            $followers = [];
        }

        # add user_id to followers
        array_push($followers, $user_id);

        $tweets = $this->table_repo->Tweets($user_id)
            ->whereIn('u.id', $followers)
            ->whereNull('t.reply_tweet_id')
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->orderBy('t.id', 'desc')
            ->limit(41)
            ->get();

        return $tweets;
    }

    /**
     * Updates a tweet
     *
     * @param Integer $id Tweet id
     * @param String $tweet updated tweet
     */

    public function update($id, $tweet)
    {
        $answer        = Tweet::find($id);
        $answer->tweet = $tweet;
        $answer        = $answer->load('user:id,name,username,profile_photo')->loadCount(['retweets', 'replies', 'likes']);
        unset($answer->user_id);
        return $answer;
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
     * find users who retweeted tweet
     *
     * @param Number $tweet_id - Id of tweet
     * @param Number $user_id - Id of logged-in user
     */

    public function findUsersRetweetTweet($tweet_id, $user_id)
    {
        $retweet_user_ids = DB::table('tweets')
            ->select('user_id')
            ->where('retweet_id', $tweet_id)
            ->pluck('user_id')
            ->toArray();

        $users = DB::table('users AS u')
            ->select(['u.id', 'name', 'username', 'biography', 'profile_photo', 'f.id AS followed_user'])
            ->leftJoin('followers AS f', function ($join) use ($user_id) {
                $join->on('f.following_id', '=', 'u.id')
                    ->where('f.user_id', '=', $user_id);
            })
            ->whereIn('u.id', $retweet_user_ids)
            ->limit(30)
            ->get();

        return $users;

    }

}
