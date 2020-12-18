<?php

namespace App\Repository;

interface TweetRepositoryInterface {

    public function create($data);

    public function read($user_id, $cursor, $news);

    public function update($id, $tweet);

    public function delete($id);

    public function findUsersRetweetTweet($tweet_id, $user_id);
}