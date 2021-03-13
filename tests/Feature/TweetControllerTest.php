<?php

namespace Tests\Feature;

use App\Tweet;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Tymon\JWTAuth\Facades\JWTAuth;

class TweetControllerTest extends TestCase
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
        // create users
        factory(User::class, 5)->create()
            ->each(function ($user) {
                $user->tweets()->createMany(factory(Tweet::class, 30)->make()->toArray());
            });

        // create user to test tweet controller
        factory(User::class, 1)->create(['username' => 'faker', 'password' => 'a'])
            ->each(function ($user) {
                $user->tweets()->createMany(factory(Tweet::class, 30)->make()->toArray());
                $user->following()->sync(array(1, 2), false);
            });
    }

    /**
     * Can get news
     *
     * @return void
     */

    public function testCanGetNews()
    {
        $users = User::all();
        $user  = User::where('username', 'faker')->first();
        $token = JWTAuth::fromUser($user);

        $response = $this->json('GET', '/api/tweet', [], ['Authorization' => 'Bearer' . $token])
            ->assertStatus(200)
            ->assertJsonStructure([
                'tweets' => [
                    '*' => [
                        'id',
                        'tweet',
                        'updated_at',
                        'retweets_count',
                        'replies_count',
                        'likes_count',
                        'liked_tweet',
                        'reply_tweet_id',
                        'user' => [
                            'id',
                            'name',
                            'username',
                            'profile_photo',
                        ],
                        'retweet_status',
                    ],
                ],
                'cursor',

            ]);

        $data = json_decode($response->getContent(), true);

        $this->assertCount(40, $data['tweets']);
        $this->assertNotNull($data['cursor']);
        $this->assertEquals(50, $data['cursor']);
    }

    /**
     * Testing whether news works with a cursor
     */

    public function testNewsWorksWithCursor()
    {
        $user   = User::where('username', 'faker')->first();
        $token  = JWTAuth::fromUser($user);
        $cursor = 50;

        $response = $this->json('GET', '/api/tweet?cursor=' . $cursor, [],
            ['Authorization' => 'Bearer ' . $token]);

        $response->assertStatus(200);

        $data = json_decode($response->getContent(), true);

        $this->assertCount(40, $data['tweets']);
        $this->assertNotNull($data['cursor']);
        $this->assertEquals(10, $data['cursor']);
    }

    /**
     * Testing index function TweetController
     *
     * @return void
     */

    public function testUserCanGetOwnTweets()
    {
        $user  = User::where('username', 'faker')->first();
        $token = JWTAuth::fromUser($user);

        $response = $this->json('GET', '/api/user/faker/tweet', [], ['Authorization' => 'Bearer ' . $token])
            ->assertStatus(200)
            ->assertJsonStructure([
                'tweets' => [
                    '*' => [
                        'id',
                        'tweet',
                        'updated_at',
                        'retweets_count',
                        'replies_count',
                        'likes_count',
                        'liked_tweet',
                        'reply_tweet_id',
                        'user' => [
                            'id',
                            'name',
                            'username',
                            'profile_photo',
                        ],
                        'retweet_status',
                    ],
                ],
                'cursor',

            ]);

        $data = json_decode($response->getContent(), true);

        $this->assertCount(30, $data['tweets']);
        $this->assertNull($data['cursor']);

    }
}
