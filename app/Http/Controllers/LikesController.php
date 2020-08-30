<?php

namespace App\Http\Controllers;

use App\Likes;
use App\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class LikesController extends Controller
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
     * @return \Illuminate\Http\Response
     */
    public function index(Tweet $tweet)
    {
        $likes = DB::table('likes AS l')
            ->select(['l.id', 'u.id', 'u.username', 'u.name', 'u.profile_photo'])
            ->join('users AS u', 'u.id', '=', 'l.user_id')
            ->where('l.tweet_id', $tweet->id)
            ->get();

        return response()->json(compact('likes'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param App\Tweet $tweet
     * @return \Illuminate\Http\Response
     */

    public function store(Tweet $tweet, Request $request)
    {
        $like = Likes::firstOrCreate(['user_id' => $this->user_id, 'tweet_id' => $tweet->id]);
        return response()->json($like);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Likes  $likes
     * @return \Illuminate\Http\Response
     */
    public function show(Likes $likes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Likes  $likes
     * @return \Illuminate\Http\Response
     */

    public function destroy(Likes $likes)
    {
        //
    }
}
