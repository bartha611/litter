<?php

namespace App\Repository;

interface FollowerRepositoryInterface {

    public function findFollowersById($id);

    public function create($user_id, $follower_id);

    public function delete($id);

    public function getFollowers($id, $user_id);

    public function getFollowing($id, $user_id);


}