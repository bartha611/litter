<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReplySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        foreach (range(1, 2000) as $index) {

            DB::table('tweets')->insert([
                'tweet' => $faker->text(),
                'user_id' => $faker->numberBetween(1, 100),
                'updated_at' => $faker->dateTimeBetween('-2 months', '+2 months'),
                'reply_tweet_id' => $faker->numberBetween(1, 20000 + $index - 1)
            ]);
        }
    }
}
