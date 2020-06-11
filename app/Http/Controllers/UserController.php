<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserCreateRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    /**
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
        $creds = $request->only(['name', 'password']);
        if (!$token = auth()->attempt($creds)) {
            return response()->json(['error' => 'unauthorized'], 401);
        }
        return response()->json($token);
    }

    /**
     * Returns all current users
     * 
     * @return \Illuminate\http\JsonResponse
     */

    public function index()
    {
        $users = User::paginate(15);
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
        $user =  User::where('name', '=', $username)->with('tweets')->get();
        return response()->json($user);
    }
}
