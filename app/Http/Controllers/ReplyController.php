<?php

namespace App\Http\Controllers;

use App\Http\Requests\TweetRequest;
use App\Http\Resources\TweetCollection;
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
        $cursor = $request->input('cursor');

        $parent_tweets = $this->reply_repo->findParentTweets($tweet->id, $this->user_id);

        $reply_tweets = $this->reply_repo->findChildTweets($tweet->id, $this->user_id, $cursor);

        $cursor = count($reply_tweets) > 40 ? $reply_tweets[40]->id : null;
        $reply_tweets = $reply_tweets->splice(0, 40);

        $parent_tweets = TweetCollection::collection($parent_tweets);
        $reply_tweets = TweetCollection::collection($reply_tweets);

        return response()->json(compact('parent_tweets', 'reply_tweets', 'cursor'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param Tweet $tweet
     * @return \Illuminate\Http\Response
     */

    public function store(Tweet $tweet, TweetRequest $request)
    {
        $tweet = $this->reply_repo->create($this->user_id, $tweet->id, $request->get('tweet'));
        return $tweet;
    }
}
