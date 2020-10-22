<?php

namespace App\Http\Controllers;

use App\Http\Requests\TweetRequest;
use App\Repository\Eloquent\TweetRepository;
use App\Repository\Eloquent\UserRepository;
use App\Tweet;
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
        $this->user_repo = $user_repo;

        $this->middleware(function ($request, $next) {
            $this->user_id = JWTAuth::parseToken()->toUser()->id;
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

        $tweets = $this->tweet_repo->tweetNews($this->user_id, $cursor, true);
      
        $cursor = count($tweets) > 40 ? $tweets[40]->id : null;
        $tweets = $tweets->slice(0, 40);
        return response()->json(compact('tweets', 'cursor'));
    }

    /**
     * returns a list of tweets for user
     * @param Request $request
     * @param String $name Username of the user being searched
     * @return JsonResponse
     */

    public function index(Request $request, $name)
    {
        $cursor = $request->input('cursor');

        $user = $this->user_repo->findUserWithCounts($name, $this->user_id);

        if (!$user) {
            abort(404, "User doesn't exist");
        }

        $tweets = $this->tweet_repo->tweetNews($user->id, $cursor, false);

        $cursor = count($tweets) > 40 ? $tweets[40]->id : null;
        $tweets = $tweets->slice(0, 40);
        return response()->json(compact('user', 'tweets', 'cursor'));
    }

    /**
     * Store a new tweet
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function store(TweetRequest $request): JsonResponse
    {
        $data = $request->all();
        $data['user_id'] = $this->user_id;
        $tweet = $this->tweet_repo->store($data);
        return response()->json($tweet);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */

    public function update(TweetRequest $request, Tweet $tweet)
    {
        $tweet = Tweet::where('id', $tweet)->where('user_id', $this->user_id)->firstOrFail();
        $tweet->update([
            'tweet' => $request->input('tweet'),
        ]);
        return response()->json($tweet);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */

    public function destroy(Tweet $tweet)
    {
        $tweet_id = $tweet->id;
        $delete_tweet = Tweet::where('id', $tweet_id)
            ->where('user_id', $this->user)
            ->firstOrFail();
        $delete_tweet->delete();
        return response()->json($tweet_id);
    }

    /**
     * shows a tweet by user
     *
     * @param string $tweet
     * @return JsonResponse
     */

    public function show($tweet)
    {
        return Tweet::where('id', $tweet)->with(['comments.user'])->firstOrFail();
    }
}
