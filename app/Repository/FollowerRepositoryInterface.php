<?php

namespace App\Repository;

interface FollowerRepositoryInterface {

    public function findFollowersById($id);

    public function create($user_id, $following_id);

    public function delete($user_id, $following_id);

    public function getFollowers($id, $user_id, $cursor);

    public function getFollowing($id, $user_id, $cursor);


}