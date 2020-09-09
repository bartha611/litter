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

        $liked_tweets = DB::table('likes')
            ->select('tweet_id')
            ->where('user_id', $this->user_id)
            ->pluck('tweet_id')->toArray();

        $tweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 't.updated_at', 'u.profile_photo', 'u.name', 'u.username',
                DB::raw('COUNT(DISTINCT r.id) AS comment_count'),
                DB::raw('COUNT(DISTINCT l.id) AS likes_count'),
                DB::raw('CASE WHEN t.id IN (' . implode(',', $liked_tweets) . ') THEN 1 ELSE 0 END AS liked_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoin('replies AS r', 'r.tweet_id', '=', 't.id')
            ->leftJoin('likes AS l', 't.id', '=', 'l.tweet_id')
            ->wherein('t.user_id', array_merge($followers, [$this->user_id]))
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->groupBy(['t.id', 't.tweet', 't.updated_at', 'u.id', 'u.name', 'u.username'])
            ->orderBy('t.id', 'desc')
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

        $user_followers = DB::table('followers')
            ->where('user_id', $this->user_id)
            ->pluck('follower_id')
            ->toArray();

        $user = DB::table('users AS u')
            ->select([
                'u.id AS id', 'u.name AS name', 'u.profile_photo AS profile_photo',
                'u.username AS username', 'u.created_at',
                DB::raw('COUNT(DISTINCT f.id) AS followers_count'),
                DB::raw('COUNT(DISTINCT t.id) AS tweets_count')
            ])
            ->where('username', $name)
            ->leftJoin('followers AS f', 'f.user_id', '=', 'u.id')
            ->leftJoin('tweets AS t', 't.user_id', '=', 'u.id')
            ->leftJoin('replies AS r', 'r.reply_tweet_id', '=', 't.id')
            ->where('r.id', null)
            ->groupBy(['u.id', 'u.name', 'u.username', 'u.profile_photo'])
            ->first();

        if (!$user) {
            abort(404, 'Not found');
        }

        $liked_tweets = DB::table('likes AS l')
            ->where('user_id', $user->id)
            ->pluck('l.tweet_id')->toArray();

        $tweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo',
                DB::raw('COUNT(DISTINCT r.id) AS comment_count'),
                DB::raw('COUNT(DISTINCT l.id) AS likes_count'),
                DB::raw('CASE WHEN t.id IN (' . implode(',', $liked_tweets) . ') THEN 1 ELSE 0 END AS liked_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoin('likes AS l', 'l.tweet_id', '=', 't.id')
            ->leftJoin('replies AS r', 'r.tweet_id', '=', 't.id')
            ->leftJoin('replies AS k', 'k.reply_tweet_id', '=', 't.id')
            ->where('t.user_id', $user->id)
            ->orderBy('t.id', 'desc')
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->groupBy(['t.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo'])
            ->havingRaw('COUNT(k.id) = ?', [0])
            ->get();

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
        return response()->json($tweet->load('user:id,name,username,profile_photo'));
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
