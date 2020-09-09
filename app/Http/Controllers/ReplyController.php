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

        $likes_tweets = DB::table('likes')
            ->where('user_id', $this->user_id)
            ->pluck('tweet_id')
            ->toArray();

        if (!$cursor) {

            $parent_tweets = DB::table('tweets AS t')
                ->select([
                    't.id', 't.tweet', 't.updated_at', 'u.username', 'u.name',
                    'u.profile_photo', 'lt.likes_count', 'rt.comments_count',
                    DB::raw('CASE WHEN t.id IN (' . implode(',', $likes_tweets) . ') THEN 1 ELSE 0 END AS liked_tweet')
                ])
                ->join('users AS u', 'u.id', '=', 't.user_id')
                ->leftJoin(DB::raw('(' . $likesTempTable->toSql() . ') AS lt'), 'lt.tweet_id', '=', 't.id')
                ->leftJoin(DB::raw('(' . $repliesTempTable->toSql() . ') AS rt'), 'rt.tweet_id', '=', 't.id')
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
                'lt.likes_count', 'rt.comments_count'
            ])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->leftJoin(DB::raw('(' . $likesTempTable->toSql() . ') AS lt'), 'lt.tweet_id', '=', 't.id')
            ->leftJoin(DB::raw('(' . $repliesTempTable->toSql() . ') AS rt'), 'rt.tweet_id', '=', 't.id')
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
     * Show the form for editing the specified resource.
     *
     * @param  \App\Reply  $reply
     * @return \Illuminate\Http\Response
     */
    public function edit(Reply $reply)
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
