<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RetweetSeeder extends Seeder
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
            $tweet_id = $faker->numberBetween(1,10000);
            $user_id = $faker->numberBetween(1,101);

            $result = DB::table('retweets')
                ->where('user_id', $user_id)
                ->where('tweet_id', $tweet_id)
                ->first();

            if(!$result) {
                $updated_at = DB::table('tweets')
                    ->select('updated_at')
                    ->where('id', $tweet_id)
                    ->first();

                $newtime = strtotime('+' . strval(rand(5,100)) . ' minutes', strtotime($updated_at->updated_at));

                DB::table('retweets')->insert([
                    'user_id' => $user_id,
                    'tweet_id' => $tweet_id,
                    'updated_at' => date('Y-m-d h-i-s', $newtime)
                ]);

                $count += 1;
            }
        } while ($count < 5000);
    }
}
