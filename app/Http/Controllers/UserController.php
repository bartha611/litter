<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    /**
     * Registers a user to site
     *
     * @param UserCreateRequest $request
     * @return \Illuminate\http\JsonResponse
     */
    public function register(UserCreateRequest $request): JsonResponse
    {
        $user = User::firstOrCreate($request->all());
        $token = auth()->login($user);
        $user->profile_photo = "https://insta611.s3.amazonaws.com/images/1591320571download.png";
        return response()->json(compact('user', 'token'));
    }

    /**
     * Logs the user in
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function login(Request $request)
    {
        $creds = $request->only(['username', 'password']);
        if (!$token = auth()->attempt($creds)) {
            return response()->json(['error' => 'unauthorized'], 401);
        }
        $user = JWTAuth::user();
        return response()->json(compact('token', 'user'));
    }

    /**
     * Returns all current users or users related to search patter
     *
     * @param Request $request
     * @return \Illuminate\http\JsonResponse
     */

    public function index(Request $request)
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;

        $followersTempTable = DB::table('followers')
            ->select(['user_id', DB::raw('COUNT(*) AS followers_count')])
            ->groupBy('user_id');

        $user_followers = DB::table('followers')->where('user_id', '=', $user_id)
            ->pluck('follower_id')
            ->toArray();

        $search = $request->query('search');

        if ($search) {
            $users = DB::table('users AS u')
                ->select([
                    'u.id', 'name', 'profile_photo', 'username',
                    DB::raw('IFNULL(followers_count,0) AS followers_count'),
                    DB::raw('CASE WHEN u.id IN (' . implode("','", array_merge($user_followers, [-1])) . ') THEN 1 ELSE 0 END AS follower_user'),
                ])
                ->leftJoinSub($followersTempTable, 'f', function ($join) {
                    $join->on('f.user_id', '=', 'u.id');
                })
                ->where('name', 'like', $search . '%')
                ->orderBy('followers_count', 'desc')
                ->limit(10)
                ->get();
        } else {
            $users = User::limit(10)->get();
        }
        return response()->json($users);
    }

    /**
     * show user details and tweets
     *
     * @param string $username
     * @return \Illuminate\Http\JsonResponse
     */

    public function show($username)
    {
        $user = User::where('name', '=', $username)->with('tweets')->get();
        return response()->json($user);
    }
}
