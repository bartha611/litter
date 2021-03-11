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
                'biography' => $faker->text()
            ]);
        }
        DB::table('users')->insert([
            'username' => 'bartha611',
            'name' => 'adam',
            'email' => 'adambarth611@gmail.com',
            'password' => bcrypt('a'),
            'biography' => $faker->text()
        ]);
    }
}
