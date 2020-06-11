<?php

namespace App\Http\Controllers;

use App\Follower;
use App\Http\Requests\FollowerRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class FollowerController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function store(FollowerRequest $request): JsonResponse
    {
        $data = $request->all();
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $data['user_id'] = $user_id;
        $follower = Follower::create($data);
        echo $follower->FollowedUser()->name;
        return response()->json(['message' => 'You have successfully followed ']);
    }
}
