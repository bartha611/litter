<?php

namespace App\Http\Controllers;

use App\Http\Requests\TweetRequest;
use App\Http\Requests\TweetUpdateDestroyRequest;
use App\Http\Resources\TweetCollection;
use App\Repository\Eloquent\TweetRepository;
use App\Repository\Eloquent\UserRepository;
use App\Tweet;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class TweetController extends Controller
{
    protected $tweet_repo;
    protected $user_repo;

    /**
     * gets user id in constructor
     *
     * @return void
     */

    public function __construct(TweetRepository $tweet_repo, UserRepository $user_repo)
    {
        $this->tweet_repo = $tweet_repo;
        $this->user_repo  = $user_repo;

        $this->middleware(function ($request, $next) {
            $this->user = JWTAuth::parseToken()->toUser();
            return $next($request);
        });

    }

    /**
     * Gets news feed for user
     *
     * @param Request $request
     * @return JsonResponse
     */

    public function news(Request $request)
    {
        #retrieve cursor from request.  cursor comes in form of date value

        $cursor = $request->input('cursor');

        $tweets = $this->tweet_repo->read($this->user->id, $cursor, true);

        $cursor = count($tweets) > 40 ? $tweets[40]->id : null;
        $tweets = $tweets->slice(0, 40);
        $tweets = TweetCollection::collection($tweets);

        return response()->json(compact('tweets', 'cursor'));
    }

    /**
     * returns a list of tweets for user
     * @param Request $request
     * @param User $user - User
     * @return JsonResponse
     */

    public function index(Request $request, User $user)
    {
        $cursor = $request->input('cursor');

        $user = $this->user_repo->findUserWithCounts($user->id, $this->user->id);

        $tweets = $this->tweet_repo->read($user->id, $cursor, false);

        $cursor = count($tweets) > 40 ? $tweets[40]->id : null;
        $tweets = $tweets->slice(0, 40);

        $tweets = TweetCollection::collection($tweets);
        return response()->json(compact('user', 'tweets', 'cursor'));

    }

    public function show(Tweet $tweet)
    {
        $answer = Tweet::where('id', $tweet->id)->withCount(['replies', 'likes'])->get();
        return response()->json($answer);
    }

    /**
     * Store a new tweet
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function store(TweetRequest $request)
    {
        $data            = $request->all();
        $data['user_id'] = $this->user->id;
        $tweet           = $this->tweet_repo->create($data);

        return response()->json($tweet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param  \App\Tweet  $tweet
     * @return \Illuminate\Http\JsonResponse
     */

    public function update(TweetUpdateDestroyRequest $request, Tweet $tweet): JsonResponse
    {
        $data = $this->tweet_repo->update($tweet->id, $request->get('tweet'));
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param TweetUpdateDestroyRequest $request
     * @param  \App\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */

    public function destroy(TweetUpdateDestroyRequest $request, Tweet $tweet)
    {
        $response = $this->tweet_repo->delete($tweet->id);
        return response()->json($response);
    }

    /**
     * Get users who have retweeted id
     * @param Request $request
     * @param \App\Tweet $tweet
     */

    public function findUsersRetweet(Request $request, Tweet $tweet)
    {
        $users = $this->tweet_repo->findUsersRetweetTweet($tweet->id, $this->user->id);

        return response()->json(compact('users'));
    }

}
