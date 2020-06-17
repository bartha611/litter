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
        $creds = $request->only(['name', 'password']);
        if (!$token = auth()->attempt($creds)) {
            return response()->json(['error' => 'unauthorized'], 401);
        }
        return response()->json(compact('token'));
    }

    /**
     * Returns all current users or users related to search patter
     * 
     * @param Request $request
     * @return \Illuminate\http\JsonResponse
     */

    public function index(Request $request)
    {
        $search = $request->query('s');
        if ($search) {
            $users = DB::table('users')->select(['id', 'name', 'email'])->where('name', 'like', $search . '%')->paginate();
        } else {
            $users = User::paginate(15);
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
        $user =  User::where('name', '=', $username)->with('tweets')->get();
        return response()->json($user);
    }
}
