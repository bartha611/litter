<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Http\Requests\CommentRequest;
use App\Http\Requests\CommentUpdateRequest;
use App\Tweet;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\UnauthorizedException;
use Tymon\JWTAuth\Facades\JWTAuth;

class CommentController extends Controller
{
    /**
     * constructor that gets user id from jwtauth
     *
     * @return void
     */

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user = JWTAuth::parseToken()->toUser()->id;
            return $next($request);
        });
    }

    /**
     * display a list of comments base on tweet
     *
     * @param Tweet $tweet
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function index(Tweet $tweet, Request $request): JsonResponse
    {
        $cursor = $request->input('cursor');

        $tweets = DB::table('tweets AS t')
            ->select(['t.id', 't.tweet', 't.updated_at', 'u.username', 'u.name', 'u.profile_photo'])
            ->join('users AS u', 't.user_id', '=', 'u.id')
            ->where('t.id', $tweet->id)
            ->first();

        $comments = DB::table('comments AS c')
            ->select(['c.id', 'c.comment', 'c.user_id', 'c.updated_at',
                'username', 'name', 'profile_photo'])
            ->join('users AS u', 'c.user_id', '=', 'u.id')
            ->where('tweet_id', $tweet->id)
            ->where(function ($query) use ($cursor) {
                if ($cursor) {
                    $query->where('c.id', '<=', $cursor);
                }
            })
            ->orderBy('c.id', 'desc')
            ->limit(11)
            ->get();

        $cursor = count($comments) > 10 ? $comments[10]->id : null;
        $comments = $comments->slice(0, 10);
        return response()->json(compact('comments', 'cursor', 'tweets'));
    }

    /**
     * store a new comment for tweet
     *
     * @param CommentRequest $request
     * @param Tweet $tweet
     * @return JsonResponse
     */

    public function store(CommentRequest $request, Tweet $tweet): JsonResponse
    {

        $comment = Comment::create([
            'user_id' => $this->user,
            'comment' => $request->input('comment'),
            'tweet_id' => $tweet->id,
        ]);
        return response()->json($comment);
    }

    /**
     * deletes a comment owned by a user
     *
     * @param Comment $comment
     * @return JsonResponse
     */

    public function destroy(Comment $comment): JsonResponse
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $comment = Comment::where('user_id', $user_id)->where('id', $comment)->firstOrFail();
        $comment->delete();
        return response()->json($comment);
    }

    /**
     * updates a comment
     *
     * @param Request $request
     * @param Comment $comment
     * @return JsonResponse
     */

    public function update(CommentUpdateRequest $request, Comment $comment): JsonResponse
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $comment = Comment::where('user_id', $user_id)->where('id', $comment)->first();
        if (!$comment) {
            throw new UnauthorizedException('comment not owned by user or does not exist');
        }
        $comment->update([
            'comment' => $request->input('comment'),
        ]);
        return response()->json($comment);
    }

    /**
     * shows a particular comment
     *
     * @param int id
     * @return JsonResponse
     */

    public function show($comment)
    {
        $comment = Comment::where('id', $comment)->get();
        return response()->json($comment);
    }
}
