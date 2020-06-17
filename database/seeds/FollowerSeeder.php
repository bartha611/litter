<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class FollowerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        foreach (range(1, 1000) as $index) {
            DB::table('followers')->insert([
                'user_id' => $faker->numberBetween(1, 100),
                'follower_id' => $faker->numberBetween(1, 100)
            ]);
        }
    }
}
