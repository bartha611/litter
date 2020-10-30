<?php

namespace App\Repository\Eloquent;

use App\Likes;
use App\Repository\LikesRepositoryInterface;
use Illuminate\Support\Facades\DB;

class LikesRepository implements LikesRepositoryInterface {

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
     * @param Integer $user_id
     * @return Array $likes
     */

    public function findLikedTweets($id) {
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