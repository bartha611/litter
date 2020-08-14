<?php

namespace App\Http\Controllers;

use App\Follower;
use App\Http\Requests\TweetRequest;
use App\Tweet;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class TweetController extends Controller
{

    /**
     * gets user id in constructor
     *
     * @return void
     */

    public function __construct()
    {
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
        $cursor = $request->input('cursor');
        $followers = Follower::select(['follower_id'])
            ->where('user_id', $this->user_id)
            ->pluck('follower_id')->toArray();

        $tweets = Tweet::select(['id', 'tweet', 'user_id', 'updated_at'])
            ->whereIn('user_id', array_merge($followers, [$this->user_id]))
            ->with('user:id,name,profile_photo,username')
            ->orderBy('id', 'desc')
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('id', '<=', $cursor);
                }
            })
            ->limit(11)
            ->get();

        $cursor = count($tweets) > 10 ? $tweets[10]->id : null;
        $tweets = $tweets->slice(0, 10);
        return response()->json(compact('tweets', 'cursor'));
    }

    /**
     * returns a list of tweets for user
     * #@param Request $request
     *
     * @return JsonResponse
     */
    public function index(Request $request, $name)
    {
        $cursor = $request->input('cursor');

        $user_followers = DB::table('followers')->where('user_id', $this->user_id)
            ->pluck('follower_id')
            ->toArray();

        $user = DB::table('users AS u')
            ->select(['u.id AS id', 'u.name AS name', 'u.profile_photo AS profile_photo',
                'u.username AS username',
                DB::raw('COUNT(DISTINCT f.id) AS followers_count'),
                DB::raw('COUNT(DISTINCT t.id) AS tweets_count'),
            ])
            ->where('name', $name)
            ->leftJoin('followers AS f', 'f.user_id', '=', 'u.id')
            ->leftJoin('tweets AS t', 't.user_id', '=', 'u.id')
            ->groupBy(['u.id', 'u.name', 'u.profile_photo'])
            ->first();

        if (!$user) {
            abort(404, 'Not found');
        }

        $tweets = DB::table('tweets')
            ->select(['id', 'tweet', 'user_id', 'updated_at'])
            ->where('user_id', $user->id)
            ->orderBy('id', 'desc')
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('id', '<=', $cursor);
                }
            })
            ->limit(11)
            ->get();

        foreach ($tweets as $tweet) {
            $tweet->user = $user;
        }
        $cursor = count($tweets) > 10 ? $tweets[10]->id : null;
        $tweets = $tweets->slice(0, 10);
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
        $tweet = Tweet::create($data);
        return response()->json($tweet->load('user:id,name,profile_photo'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tweet  $tweet
     * @return \Illuminate\Http\Response
     */

    public function update(TweetRequest $request, $tweet)
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
