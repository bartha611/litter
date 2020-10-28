<?php

namespace App\Repository;

interface ReplyRepositoryInterface {
    public function replyTempTable();
    
    public function findParentTweets($tweet_id, $user_id);

}