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
        $user = User::create($request->all());
        $token = auth()->login($user);
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
        $user_followers = DB::table('followers')->where('user_id', '=', $user_id)
            ->pluck('follower_id')
            ->toArray();
        $search = $request->query('search');
        if ($search) {
            $users = DB::table('users')
                ->select(['users.id', 'name', 'email', 'profile_photo', 'username',
                    DB::raw('COUNT(f.follower_id) AS total_followers'),
                    DB::raw('CASE WHEN users.id IN (' . implode(',', $user_followers) . ') THEN 1 ELSE 0 END AS follower_user'),
                ])
                ->where('name', 'like', $search . '%')
                ->leftJoin('followers AS f', 'users.id', '=', 'f.follower_id')
                ->groupBy('users.id', 'name', 'email', 'profile_photo')
                ->orderBy('total_followers', 'desc')
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
