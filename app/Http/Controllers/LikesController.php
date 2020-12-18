<?php

namespace App\Http\Controllers;

use App\Http\Requests\LikesCreateRequest;
use App\Http\Resources\TweetCollection;
use App\Likes;
use App\Repository\Eloquent\LikesRepository;
use App\Tweet;
use App\User;
use Illuminate\Http\Request;
use stdClass;
use Tymon\JWTAuth\Facades\JWTAuth;

class LikesController extends Controller
{

    protected $likes_repo;
    public function __construct(LikesRepository $likes_repo)
    {
        $this->likes_repo = $likes_repo;

        $this->middleware(function ($request, $next) {
            $this->user_id = JWTAuth::parseToken()->toUser()->id;
            return $next($request);
        });
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param App\Tweet $tweet
     * @return \Illuminate\Http\Response
     */

    public function store(Tweet $tweet, LikesCreateRequest $request)
    {
        $like = $this->likes_repo->create($this->user_id, $tweet->id);
        return response()->json($like);
    }

    /**
     * Displays a list of liked tweets
     *
     * @param \App\User  $user
     * @return \Illuminate\Http\Response
     */

    public function show(User $user)
    {
        $likes_tweets = $this->likes_repo->findLikedTweets($user->id, $this->user_id);

        $tweets = TweetCollection::collection($likes_tweets);

        return response()->json(compact('tweets'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Likes  $likes
     * @return \Illuminate\Http\Response
     */

    public function destroy(Request $request, Tweet $tweet)
    {
        $likes = Likes::where('tweet_id', $tweet->id)
            ->where('user_id', $this->user_id)
            ->first();

        if (!$likes) {
            abort(404, "Like doesn't exist");
        }

        $object = new stdClass();
        $object->id = $likes->id;
        $object->tweet_id = $likes->tweet_id;
        $this->likes_repo->delete($object->id);
        return response()->json($object);
    }

    /**
     * Finds users who have liked tweet
     * 
     * @param Request $request
     * @param \App\Tweet $tweet
     */

    public function getUsers(Request $request, Tweet $tweet)
    {
        $users = $this->likes_repo->findUsersLikedTweet($tweet->id, $this->user_id);
        
        return response()->json(compact('users'));
    }
}
