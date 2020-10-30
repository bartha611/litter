<?php

namespace App\Http\Controllers;

use App\Follower;
use App\Http\Resources\FollowerCollection;
use App\Repository\Eloquent\FollowerRepository;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\UnauthorizedException;
use Tymon\JWTAuth\Facades\JWTAuth;

class FollowerController extends Controller
{
    protected $follower_repo;

    public function __construct(FollowerRepository $follower_repo)
    {
        $this->follower_repo = $follower_repo;

        $this->middleware(function ($request, $next) {
            $this->user_id = JWTAuth::parseToken()->toUser()->id;
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
        $followers = $this->follower_repo->getFollowers($this->user_id, $this->user_id);
        $followers = FollowerCollection::collection($followers);
        return response()->json(compact('followers'));
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

    public function show(Request $request, User $follower)
    {
        $followers = $this->follower_repo->getFollowers($follower->id, $this->user_id);
        return FollowerCollection::collection($followers);
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
