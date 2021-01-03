<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use App\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    /**
     * Tests whether login works
     * 
     * @return void
     */

    public function testLogin()
    {
        $user = factory(User::class)->create([
            'username' => 'example',
            'password' => 'puddles'
        ]);

        $userData = ['username' => 'example', 'password' => 'puddles'];

        $this->json('POST', 'api/user/login', $userData)
            ->assertStatus(200)
            ->assertJsonStructure([
                'user' => [
                    'id',
                    'username',
                    'name',
                    'profile_photo',
                    'background_image',
                    'biography',
                    'created_at',
                    'email'
                ],
                "token"
            ]);

        $this->assertAuthenticated();
    }
}
