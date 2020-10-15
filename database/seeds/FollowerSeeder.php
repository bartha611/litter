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
        $count = 0;
        do {
            $user_id = $faker->numberBetween(1, 100);
            $follower_id = $faker->numberBetween(1, 100);

            $result = DB::table('followers')
                ->where('user_id', $user_id)
                ->where('follower_id', $follower_id)
                ->first();

            if (!$result) {
                DB::table('followers')->insert([
                    'user_id' => $user_id,
                    'follower_id' => $follower_id
                ]);
                $count += 1;
            }

        } while ($count < 1000);
    }
}
