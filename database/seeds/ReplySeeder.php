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
        $count = 0;
        do {
            $tweet_id = $faker->numberBetween(1, 10000);
            $reply_tweet_id = $faker->numberBetween(1, 10000);
            $result = DB::table('replies')
                ->where('reply_tweet_id', $reply_tweet_id)
                ->where('tweet_id', $tweet_id)
                ->first();
            if (!$result) {
                DB::table('replies')->insert([
                    'tweet_id' => $tweet_id,
                    'reply_tweet_id' => $reply_tweet_id
                ]);
                $count += 1;
                $replies = DB::table('replies')
                    ->where('reply_tweet_id', $tweet_id)
                    ->pluck('tweet_id')
                    ->toArray();
                foreach ($replies as $reply) {
                    DB::table('replies')->insert([
                        'tweet_id' => $reply,
                        'reply_tweet_id' => $reply_tweet_id
                    ]);
                    $count += 1;
                }
            }
        } while ($count < 8500);
    }
}
