<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CommentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        foreach (range(1, 3000) as $index) {
            DB::table('comments')->insert([
                'user_id' => $faker->numberBetween(1, 100),
                'tweet_id' => $faker->numberBetween(1, 1000),
                'comment' => $faker->text(100)
            ]);
        }
    }
}
