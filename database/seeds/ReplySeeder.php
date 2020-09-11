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
            $reply_tweet_id = $faker->numberBetween($tweet_id, 10000);
            $reply = DB::table('replies')
                ->where('reply_tweet_id', $reply_tweet_id)
                ->first();

            if (!$reply) {
                DB::table('replies')
                    ->insert([
                        'tweet_id' => $tweet_id,
                        'reply_tweet_id' => $reply_tweet_id
                    ]);
                $count += 1;
            }
        } while ($count < 9000);
    }
}
