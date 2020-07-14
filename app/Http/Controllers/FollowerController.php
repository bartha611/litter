<?php

namespace App\Http\Controllers;

use App\Follower;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\UnauthorizedException;
use Tymon\JWTAuth\Facades\JWTAuth;

class FollowerController extends Controller
{
    /**
     * gets userid in middleware
     *
     * @return null
     */

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user = JWTAuth::parseToken()->toUser()->id;
            return $next($request);
        });
    }

    /**
     * Gets a listing of followers for user
     *
     * @return JsonResponse
     */

    public function index()
    {
        $followers = Follower::where('user_id', $this->user)->with('FollowedUser:id,name,profile_photo')->get();
        return response()->json($followers);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function store(Request $request): JsonResponse
    {
        $data = $request->all();
        $data['user_id'] = $this->user;
        $follower = Follower::firstOrCreate($data);
        return response()->json($follower);
    }

    /**
     * unfollows the user
     *
     * @param Request $request
     * @param Follower $follower
     * @return JsonResponse
     */

    public function destroy(Request $request, Follower $follower)
    {
        if ($follower->user_id != $this->user) {
            throw new UnauthorizedException("Unauthorized to unfollow");
        }
        $id = $follower->id;
        $follower->delete();
        return response()->json($id);
    }
}
