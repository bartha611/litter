<?php

namespace App\Repository;

interface FollowerRepositoryInterface {
    public function findFollowersById($id);

    public function followerTempTable();

}