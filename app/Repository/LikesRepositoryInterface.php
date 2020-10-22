<?php

namespace App\Repository;

interface LikesRepositoryInterface {
    public function likesTempTable();

    public function findUserLikedTweets($id);
}