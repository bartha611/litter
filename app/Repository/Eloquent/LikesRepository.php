<?php

namespace App\Repository\Eloquent;

use App\Likes;
use App\Repository\LikesRepositoryInterface;
use Illuminate\Support\Facades\DB;

class LikesRepository implements LikesRepositoryInterface {

    protected $table_repo;

    public function __construct(TableRepository $table_repo)
    {
        $this->table_repo = $table_repo;
    }

    /**
     * Creates a like given user_id and tweet_id
     * 
     * @param String $user_id User id of person liking the tweet
     * @param String $tweet_id Tweet id of tweet being liked
     */

    public function create($user_id, $tweet_id)
    {
        $like = Likes::create(['tweet_id' => $tweet_id, 'user_id' => $user_id]);
        return $like;
    }

    /**
     * Deletes like id given id of like
     * 
     * @param String $id Id of like being deleted
     * @return String Id of like being deleted
     */

    public function delete($id)
    {
        Likes::destroy($id);
        return $id;
    }

    /**
     * Returns an array of user-liked tweet ids given user_id
     * 
     * @param String $id User id of individual being searched
     * @param String $user_id Id of logged in user
     * @return Array $likes
     */

    public function findLikedTweets($id, $user_id) {
        $user_liked_tweets = DB::table('likes')
            ->select('tweet_id')
            ->where('user_id', $id);

        $liked_tweets = $this->table_repo->Tweets($id)
            ->joinSub($user_liked_tweets, 'ul', function($join) {
                $join->on('ul.tweet_id', '=', 't.id');
            })
            ->orderBy('t.id', 'desc')
            ->limit(21)
            ->get();
        
        return $liked_tweets;
    }

}