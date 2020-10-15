<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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
        $count = 0;
        do {
            $user_id = $faker->numberBetween(1, 100);
            $tweet_id = $faker->numberBetween(1, 20000);
            $result = DB::table('likes')
                ->where('user_id', $user_id)
                ->where('tweet_id', $tweet_id)
                ->first();
            
            if (!$result) {
                // get date value of tweet 
                $tweet = DB::table('tweets')
                    ->select('updated_at')
                    ->where('id', $tweet_id)
                    ->first();
                
                DB::table('likes')->insert([
                    'tweet_id' => $tweet_id,
                    'user_id' => $user_id,
                    'updated_at' => date('Y-m-d h-i-s', strtotime('+' . strval(rand(1, 1000)) . ' minutes', strtotime($tweet->updated_at)))
                ]);
                $count += 1;
            }
        } while ($count < 10000);
    }
}
