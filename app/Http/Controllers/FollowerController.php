<?php

namespace App\Http\Controllers;

use App\Follower;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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
        $followers = Follower::select(['id', 'follower_id'])->where('user_id', $this->user)->with('FollowedUser')->get();
        return response()->json($followers);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    /**
     *
     * @param Request $request
     * @param String $follower
     * @return JsonResponse
     */

    public function show(Request $request, $follower)
    {
        $cursor = $request->input('cursor');
        $id = $this->user;
        $user = DB::table('users')->select(['id', 'name', 'profile_photo', 'biography'])
            ->where('name', '=', $follower)
            ->first();
        if (!$user) {
            return response()->json(['error' => 'user does not exist'], 500);
        }
        $userFollowers = Follower::where('user_id', $this->user)->pluck('follower_id')->toArray();
        $followers = Follower::select(['id', 'follower_id'])
            ->where('user_id', '=', $user->id)
            ->with('FollowedUser')
            ->where(function ($query) use ($id, $user, $userFollowers, $cursor) {
                if ($cursor) {
                    $query->where('id', '<=', $cursor);
                }
                if (intval($user->id) != intval($id)) {
                    $query->whereNotIn('follower_id', $userFollowers);
                }
            })
            ->orderBy('id', 'desc')
            ->limit(11)
            ->get();
        $cursor = count($followers) > 10 ? $followers[10]->id : null;
        $followers = $followers->slice(0, 10);
        foreach ($followers as $follower) {
            $follower['followed'] = $user->id == $id;
        }
        return response()->json(compact('user', 'followers', 'cursor'));
    }

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
