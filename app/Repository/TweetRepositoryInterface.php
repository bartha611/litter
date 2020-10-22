<?php

namespace App\Repository;

interface TweetRepositoryInterface {

    public function retweetTempTable();

    public function tweetUserTable();

    public function tweetNews($id, $cursor, $news);

    public function store($data);
}