<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use App\Tweet;
use Faker\Generator as Faker;

$factory->define(Tweet::class, function (Faker $faker) {
    return [
        'tweet' => $faker->text(),
    ];
});
