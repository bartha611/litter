<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        foreach (range(1, 99) as $index) {
            DB::table('users')->insert([
                'username' => $faker->userName,
                'name' => $faker->name,
                'email' => $faker->email,
                'password' => bcrypt('secret'),
                'background_image' => $faker->imageUrl($width = 600, $height = 200),
                'profile_photo' => $faker->imageUrl($width = 400, $height = 400),
                'biography' => $faker->text()
            ]);
        }
        DB::table('users')->insert([
            'username' => 'bartha611',
            'name' => 'adam',
            'email' => 'adambarth611@gmail.com',
            'password' => bcrypt('a'),
            'background_image' => $faker->imageUrl($width = 600, $height = 200),
            'profile_photo' => $faker->imageUrl($width = 400, $height = 400),
            'biography' => $faker->text()
        ]);
    }
}
