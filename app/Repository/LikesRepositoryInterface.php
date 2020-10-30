<?php

namespace App\Repository;

interface LikesRepositoryInterface {

    public function findLikedTweets($id);

    public function create($user_id, $tweet_id);

    public function delete($id);
}