<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Repository\Eloquent\UserRepository;
use App\Http\Requests\UserUpdateRequest;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use stdClass;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    protected $user_repo;

    public function __construct(UserRepository $user_repo)
    {
        $this->user_repo = $user_repo;        
    }

    /**
     * Registers a user to site
     *
     * @param UserCreateRequest $request
     * @return \Illuminate\http\JsonResponse
     */

    public function register(UserCreateRequest $request): JsonResponse
    {
        $id = User::firstOrCreate($request->all());
        $user = User::where('id', $id->id)->first();
        $token = auth()->login($user);
        echo $user;
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
        $credentials = $request->only(['username', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'unauthorized'], 401);
        }
        $user = JWTAuth::user();
        return response()->json(compact('token', 'user'));
    }

    /**
     * Returns all current users or users related to search pattern
     *
     * @param Request $request
     * @return \Illuminate\http\JsonResponse
     */

    public function index(Request $request)
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;

        $search = $request->query('search');

        $users = $this->user_repo->findUsersBySearch($search, $user_id);

        return response()->json(compact('users'));
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

    /**
     * Updates user information 
     * 
     * @param User $user
     * @param UserUpdateRequest $request
     */

    public function update(User $user, UserUpdateRequest $request)
    {
        $user = $this->user_repo->updateUser($user->id, $request);
        
        return response()->json(compact('user'));

    }

}
