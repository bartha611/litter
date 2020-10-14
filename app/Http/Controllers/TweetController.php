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
        #retrive cursor from request.  cursor comes in form of date value
        $cursor = $request->input('cursor');

        #user followers to find tweets that populate news feed
        $followers = Follower::select(['follower_id'])
            ->where('user_id', $this->user_id)
            ->pluck('follower_id')->toArray();

        #user liked tweets to determine whether tweet already liked or not
        $liked_tweets = DB::table('likes')
            ->select('tweet_id')
            ->where('user_id', $this->user_id)
            ->pluck('tweet_id')->toArray();

        #temporary likes table that contains total likes count per tweet
        $likesTempTable = DB::table('likes AS lt')
            ->select('tweet_id', DB::raw('COUNT(*) AS likes_count'))
            ->groupBy('tweet_id');
        
        #temporary replies table that contains replies count per tweet
        $commentTempTable = DB::table('replies AS rt')
            ->select('tweet_id', DB::raw('COUNT(*) AS replies_count'))
            ->groupBy('tweet_id');

        #get tweets from table
        $tweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 't.updated_at', 'u.profile_photo', 'u.name', 'u.username',
                DB::raw('IFNULL(ct.replies_count,0) AS replies_count'),
                DB::raw('IFNULL(lt.likes_count,0) AS likes_count'),
                DB::raw('CASE WHEN t.id IN (' . implode(',', array_merge($liked_tweets, [-1])) . ') THEN 1 ELSE 0 END AS liked_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoinSub($commentTempTable, 'ct', function($join) {
                $join->on('ct.tweet_id', '=', 't.id');
            })
            ->leftJoinSub($likesTempTable, 'lt', function($join) {
                $join->on('lt.tweet_id', '=', 't.id');
            })
            ->wherein('t.user_id', array_merge($followers, [$this->user_id]));
        
        #get retweets from table
        $retweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 'rt.updated_at', 'u.profile_photo', 'u.name', 'u.username'
            ])


        $cursor = count($tweets) > 25 ? $tweets[25]->id : null;
        $tweets = $tweets->slice(0, 25);
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
            ->pluck('follower_id')->toArray();

        $followerTempTable = DB::table('followers')
            ->select(['user_id', DB::raw('COUNT(*) AS followers_count')])
            ->groupBy('user_id');

        $tweetsUserTable = DB::table('tweets AS t')
            ->select(['user_id', DB::raw('COUNT(*) AS tweets_count')])
            ->leftJoin('replies AS r', 't.id', '=', 'r.reply_tweet_id')
            ->whereNull('r.id')
            ->groupBy('user_id');

        $tweetsTempTable = DB::table('tweets AS t')
            ->select(['t.id', DB::raw('IFNULL(COUNT(r.id),0) AS replies_count')])
            ->leftJoin('replies AS r', 'r.tweet_id', '=', 't.id')
            ->leftJoin('replies AS k', 'k.reply_tweet_id', '=', 't.id')
            ->whereNull('k.id')
            ->groupBy('t.id');
        
        $likesTempTable = DB::table('likes AS l')
            ->select(['tweet_id', DB::raw('IFNULL(COUNT(l.id),0) AS likes_count')])
            ->groupby('tweet_id');

        $user = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.profile_photo', 'u.username',
                DB::raw('IFNULL(followers_count,0) AS followers_count'),
                DB::raw('IFNULL(tweets_count,0) AS tweets_count'),
                DB::raw('CASE WHEN u.id IN (' . implode(',', array_merge($user_followers, [-1])) . ') THEN 1 ELSE 0 END AS followed_user')
            ])
            ->leftJoinSub($followerTempTable, 'f', function ($join) {
                $join->on('f.user_id', '=', 'u.id');
            })
            ->leftJoinSub($tweetsUserTable, 't', function ($join) {
                $join->on('t.user_id', '=', 'u.id');
            })
            ->where('username', $name)
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
                't.id', 't.tweet', 't.updated_at', 'u.username',
                'u.name', 'u.profile_photo',
                DB::raw('IFNULL(lt.likes_count,0) AS likes_count'),
                DB::raw('IFNULL(t2.replies_count, 0) AS replies_count'),
                DB::raw('CASE WHEN t.id IN (' . implode(',', array_merge($liked_tweets, [-1])) . ') THEN 1 ELSE 0 END AS liked_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->joinSub($tweetsTempTable, 't2', function ($join) {
                $join->on('t2.id', '=', 't.id');
            })
            ->leftJoinSub($likesTempTable, 'lt', function($join) {
                $join->on('lt.tweet_id', '=', 't.id');
            })
            ->where('t.user_id', $user->id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->groupBy(['t.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo'])
            ->orderBy('t.id', 'DESC')
            ->limit(21)
            ->get();

        $cursor = count($tweets) > 20 ? $tweets[20]->id : null;
        $tweets = $tweets->slice(0, 20);
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
