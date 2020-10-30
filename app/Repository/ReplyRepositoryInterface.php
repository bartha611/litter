<?php

namespace App\Repository;

interface ReplyRepositoryInterface {

    public function create($user_id, $reply_tweet_id, $content);
    
    public function findParentTweets($tweet_id, $user_id);

    public function findChildTweets($tweet_id, $user_id, $cursor);

}