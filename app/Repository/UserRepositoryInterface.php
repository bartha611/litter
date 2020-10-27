<?php

namespace App\Repository;

interface UserRepositoryInterface {

    public function findUsersBySearch($search, $id);

    public function findUserWithCounts($name, $id);


}