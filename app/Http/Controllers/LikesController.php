<?php

namespace App\Http\Controllers;

use App\Http\Requests\LikesCreateRequest;
use App\Http\Requests\LikesDestroyRequest;
use App\Http\Resources\TweetCollection;
use App\Repository\Eloquent\LikesRepository;
use App\Tweet;
use App\User;
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

    public function destroy(LikesDestroyRequest $likes)
    {
        $id = $likes->id;
        $this->likes_repo->delete($id);
        return response()->json($id);
    }
}
