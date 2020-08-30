<?php

use Illuminate\Database\Seeder;

class LikesSeeder extends Seeder
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
            DB::table('likes')->insert([
                'user_id' => $faker->numberBetween(1, 101),
                'tweet_id' => $faker->numberBetween(1, 1002),
            ]);
        }

    }
}
