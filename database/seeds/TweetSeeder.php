<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TweetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        foreach (range(1, 10000) as $index) {
            DB::table('tweets')->insert([
                'user_id' => $faker->numberBetween(1, 100),
                'tweet' => $faker->text(),
                'updated_at' => $faker->iso8601(),
            ]);
        }
    }
}
