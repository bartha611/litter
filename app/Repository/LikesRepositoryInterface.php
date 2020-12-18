<?php

namespace App\Repository;

interface LikesRepositoryInterface {

    public function findLikedTweets($id, $user_id);

    public function create($user_id, $tweet_id);

    public function delete($id);

    public function findUsersLikedTweet($tweet, $user_id);
}