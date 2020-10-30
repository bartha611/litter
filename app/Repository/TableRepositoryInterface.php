<?php

namespace App\Repository;

interface TableRepositoryInterface {

    public function followerTempTable();

    public function replyTempTable();

    public function retweetTempTable();

    public function tweetUserTable();

    public function likesTempTable();

    public function Tweets($user_id);
    
}