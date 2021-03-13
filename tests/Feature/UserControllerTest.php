<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */

    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $userData = ['username' => 'example', 'password' => 'puddles', 'email' => 'faker@gmail.com'];
        factory(User::class)->create($userData);
    }

    public function testValidUserCreation()
    {
        $response = $this->postJson('/api/user/register',
            ['name' => 'faker', 'username' => 'fakeUsername', 'email' => 'faker1@gmail.com', 'password' => 'a']);

        $response->assertStatus(200);
        $response->assertJsonStructure([
            'user' => [
                'id',
                'username',
                'name',
                'profile_photo',
                'background_image',
                'biography',
                'created_at',
                'email',
            ],
            "token",
        ]);
        $this->assertNotEmpty($response['token']);
        $this->assertNotEmpty($response['user']);

    }

    /**
     * Testing Login
     *
     * @return void
     */

    public function testValidLogin()
    {

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
                    'email',
                ],
                "token",
            ]);

        $this->assertAuthenticated();
    }

    /**
     * Testing invalid login.  Ensure 401 response
     *
     * @return void
     */

    public function testInvalidLogin()
    {
        $userData = ['username' => 'example', 'password' => 'puddle'];

        $response = $this->postJson('/api/user/login', $userData);

        $response->assertStatus(401);
    }

    /**
     * Testing invalid register with non-unique username
     *
     * @return void
     */

    public function testInvalidRegisterWithNonUniqueUsername()
    {
        $userData = ['name' => 'dummy', 'username' => 'example', 'password' => 'fakePassword', 'email' => 'faker@yahoo.com'];

        $response = $this->postJson('/api/user/register', $userData);

        $response->assertStatus(422);
    }

    /**
     * Testing invalid register with non-unique email
     *
     * @return void
     */

    public function testInvalidRegisterWithNonUniqueEmail()
    {
        $userData = ['name' => 'dummy', 'username' => 'dummy1', 'password' => 'fakePassword', 'email' => 'faker@gmail.com'];

        $response = $this->postJson('/api/user/register', $userData);

        $response->assertStatus(422);
    }

    /**
     * Test whether images can be uploaded
     *
     * @return void
     */

    public function testImagesCanBeUploaded()
    {
        $user  = factory(User::class)->create(['username' => 'dumbass', 'password' => 'a']);
        $token = JWTAuth::fromUser($user);
        Storage::fake('s3');
        $time = Carbon::now();
        Carbon::setTestNow($time);

        $response = $this->post('/api/user/dumbass',
            ['profile_photo'   => UploadedFile::fake()->image('file.png', 600, 600),
                'background_image' => UploadedFile::fake()->image('file2.png', 600, 600),
                'name'             => 'dumb',
                'biography'        => 'I am an idiot',
            ]
            ,
            ["Authorization" => 'Bearer ' . $token]
        );

        $response->assertStatus(200);
        $response->assertJson(['user' => ['name' => 'dumb']]);
        Storage::disk('s3')->assertExists('images/file.png' . strtotime($time));
        Storage::disk('s3')->assertExists('images/file2.png' . strtotime($time));
    }

}
