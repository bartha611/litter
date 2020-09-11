<?php

namespace App\Http\Controllers;

use App\Reply;
use App\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class ReplyController extends Controller
{

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user_id = JWTAuth::parseToken()->toUser()->id;
            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     *
     * @param Tweet $tweet
     * @param Request $request
     *
     * @return \Illuminate\Http\Response
     */

    public function index(Tweet $tweet, Request $request)
    {

        $cursor = $request->input('cursor');

        $likesTempTable = DB::table('likes AS lt')
            ->select(['tweet_id', DB::raw('COUNT("*") AS likes_count')])
            ->groupBy('tweet_id');

        $repliesTempTable = DB::table('replies AS rt')
            ->select(['tweet_id', DB::raw('COUNT(*) AS comments_count')])
            ->groupBy('tweet_id');

        $likesTweets = DB::table('likes')
            ->select(['tweet_id'])
            ->where('user_id', $this->user_id);


        if (!$cursor) {

            $parent_tweets = DB::table('tweets AS t')
                ->select([
                    't.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo',
                    DB::raw('IFNULL(lt.likes_count,0) AS likes_count'),
                    DB::raw('IFNULL(rt.comments_count,0) AS comments_count'),
                    DB::raw('CASE WHEN lt2.tweet_id IS NULL THEN 0 ELSE 1 END AS liked_tweet')
                ])
                ->join('users AS u', 'u.id', '=', 't.user_id')
                ->leftJoin(DB::raw('(' . $likesTempTable->toSql() . ') AS lt'), 'lt.tweet_id', '=', 't.id')
                ->leftJoin(DB::raw('(' . $repliesTempTable->toSql() . ') AS rt'), 'rt.tweet_id', '=', 't.id')
                ->leftJoinSub($likesTweets, 'lt2', function ($join) {
                    $join->on('t.id', '=', 'lt2.tweet_id');
                })
                ->whereIn('t.id', function ($query) use ($tweet) {
                    $query->select('tweet_id')
                        ->from('replies')
                        ->where('reply_tweet_id', $tweet->id);
                })
                ->orWhere('t.id', $tweet->id)
                ->groupBy(['t.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo'])
                ->get();
        }

        $reply_tweets = DB::table('tweets AS t')
            ->select([
                't.id', 't.tweet', 't.updated_at', 'u.name', 'u.username', 'u.profile_photo',
                DB::raw('IFNULL(lt.likes_count,0) AS likes_count'),
                DB::raw('IFNULL(rt.comments_count,0) AS comments_count'),
                DB::raw('CASE WHEN lt2.tweet_id IS NULL THEN 0 ELSE 1 END likes_tweet')
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoin(DB::raw('(' . $likesTempTable->toSql() . ') AS lt'), 'lt.tweet_id', '=', 't.id')
            ->leftJoin(DB::raw('(' . $repliesTempTable->toSql() . ') AS rt'), 'rt.tweet_id', '=', 't.id')
            ->leftJoinSub($likesTweets, 'lt2', function ($join) {
                $join->on('t.id', '=', 'lt2.tweet_id');
            })
            ->whereIn('t.id', function ($query) use ($tweet) {
                $query->select('reply_tweet_id')
                    ->from('replies')
                    ->where('tweet_id', $tweet->id);
            })
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('t.id', '<=', $cursor);
                }
            })
            ->groupBy(['t.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo'])
            ->limit(21)
            ->get();

        $cursor = $reply_tweets->count() > 20 ? $reply_tweets[20]->id : null;
        $reply_tweets = $reply_tweets->slice(0, 20);
        return response()->json(compact('parent_tweets', 'reply_tweets', 'cursor'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Tweet $tweet
     * @return \Illuminate\Http\Response
     */
    public function store(Tweet $tweet, Request $request)
    {
        $reply_tweet_id = $request->input('reply_tweet_id');
        DB::table('replies')->insert([
            'tweet_id' => $tweet->id,
            'reply_tweet_id' => $reply_tweet_id
        ]);

        return response()->json(compact('reply'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function show(Reply $reply)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Reply $reply)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reply $reply)
    {
        //
    }
}
