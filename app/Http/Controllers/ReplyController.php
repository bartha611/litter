<?php

namespace App\Http\Controllers;

use App\Reply;
use App\Repository\Eloquent\ReplyRepository;
use App\Tweet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class ReplyController extends Controller
{

    protected $reply_repo;

    public function __construct(ReplyRepository $reply_repo)
    {
        $this->reply_repo = $reply_repo;

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
        $answer = $this->reply_repo->findParentTweets($tweet->id);

        return $answer;
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
        $data = $request->all();
        $data['user_id'] = $this->user_id;
        $comment = Tweet::create($data);
        Reply::create([
            'tweet_id' => $tweet->id,
            'reply_tweet_id' => $comment->id
        ]);
        $reply = DB::table('tweets AS t')
            ->select(['t.id', 't.tweet', 't.updated_at', 'u.name', 'u.username', 'u.profile_photo'])
            ->join('users AS u', 'u.id', '=', 't.user_id')
            ->where('t.id', $comment->id)
            ->first();

        $reply->liked_comment = "0";
        $reply->likes_count = "0";
        $reply->comments_count = "0";
        return response()->json(compact('reply'));
    }
}
