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

        // dates array contains datetimes and tweets contain indexes that aren't 
        $dates = [];
        $tweets = [1, 2, 3, 4, 5];

        // iterate over a range of 20000 to create dates

        foreach (range(1, 20000) as $index) {
            array_push($dates, $faker->dateTimeBetween('-6 months', '+4 months'));
        }

        // sort dates
        usort($dates, function ($a, $b) {
            $a = $a->format('Y-m-d h:i:s');
            $b = $b->format('Y-m-d h:i:s');

            return strtotime($a) - strtotime($b);
        });

        // insert into appropriate fields
        foreach (range(1, 20000) as $index) {

            $number = rand(1, 10);

            if ($number < 4 or $index < 6) {
                // insert as a tweet and insert index into array

                DB::table('tweets')->insert([
                    'tweet' => $faker->text(),
                    'user_id' => $faker->numberBetween(1,100),
                    'updated_at' => $dates[$index - 1]
                ]);
                array_push($tweets, $index);
            } elseif ($number < 8) {
                // insert into tweets as a reply

                DB::table('tweets')->insert([
                    'tweet' => $faker->text(),
                    'user_id' => $faker->numberBetween(1, 100),
                    'reply_tweet_id' => $tweets[rand(0, count($tweets) - 1)],
                    'updated_at' => $dates[$index - 1]
                ]);               
            } else {
                // insert as a retweet

                $retweet_id = $tweets[rand(0, count($tweets) - 1)];
                $tweet_text = DB::table('tweets')->select('tweet')->where('id', $retweet_id)->pluck('tweet');

                DB::table('tweets')->insert([
                    'user_id' => $faker->numberBetween(1,100),
                    'tweet' => $tweet_text,
                    'retweet_id' => $retweet_id,
                    'updated_at' => $dates[$index - 1]
                ]);
            }

        }

    }
}
