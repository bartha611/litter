<?php

namespace App\Http\Controllers;

use App\Follower;
use App\Http\Requests\FollowerUpdateDeleteRequest;
use App\Http\Resources\FollowerCollection;
use App\Repository\Eloquent\FollowerRepository;
use App\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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
     * Gets a list of those who are following @user_id
     * 
     * @param User $user
     * @return JsonResponse
     */

    public function following(Request $request, User $user)
    {
        $cursor = $request->input('cursor');
        $following = $this->follower_repo->getFollowing($user->id, $this->user_id, $cursor);

        $cursor = count($following) > 20 ? $following[20]->id : null;
        $following = $following->slice(0, 20);
        $following = FollowerCollection::collection($following);

        return response()->json(compact('following', 'cursor'));
    }

    /**
     * Finds followers of user
     * 
     * @param Request $request
     * @param String $user
     * @return JsonResponse
     */

    public function follower(Request $request, User $user)
    {
        $cursor = $request->input('cursor');
        $followers = $this->follower_repo->getFollowers($user->id, $this->user_id, $cursor);

        $cursor = count($followers) > 20 ? $followers[20]->id : null;
        $followers = $followers->slice(0, 40);
        $followers = FollowerCollection::collection($followers);

        return response()->json(compact('followers', 'cursor'));
    }

    /**
     * Stores new user and following combination
     * 
     * @param Request $request
     * @param User $user
     */

    public function store(Request $request, User $user)
    {
        $response = $this->follower_repo->create($this->user_id, $user->id);
        return response()->json($response);
    }

    /**
     * Deletes following
     *
     * @param Request $request
     * @param Follower $follower
     * @return JsonResponse
     */

    public function destroy(FollowerUpdateDeleteRequest $request, Follower $follower)
    {
        $id = $this->follower_repo->delete($follower->id);
        return response()->json($id);
    }
}
