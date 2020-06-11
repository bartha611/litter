<?php

namespace App\Http\Controllers;

use App\Comment;
use App\Tweet;
use App\Http\Requests\CommentRequest;
use App\Http\Requests\CommentUpdateRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\UnauthorizedException;
use Tymon\JWTAuth\Facades\JWTAuth;

class CommentController extends Controller
{
    /**
     * display a list of comments base on tweet
     * 
     * @param Tweet $tweet
     * @return \Illuminate\Http\JsonResponse
     */

    public function index(Tweet $tweet): JsonResponse
    {
        $comments = Comment::where('tweet_id', $tweet)->with('user')->paginate();
        return response()->json($comments);
    }

    /**
     * store a new comment for tweet
     * 
     * @param CommentRequest $request
     * @return JsonResponse
     */

    public function store(CommentRequest $request, Tweet $tweet): JsonResponse
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $comment = Comment::create([
            'user_id' => $user_id,
            'comment' => $request->input('comment'),
            'tweet_id' => $tweet
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
            'comment' => $request->input('comment')
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
