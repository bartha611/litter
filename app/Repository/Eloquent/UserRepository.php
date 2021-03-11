<?php

namespace App\Repository\Eloquent;

use Illuminate\Support\Facades\DB;
use App\User;
use Illuminate\Support\Facades\Storage;
use App\Repository\UserRepositoryInterface;
use Carbon\Carbon;

class UserRepository implements UserRepositoryInterface {

    protected $table_repo;
    protected $follower_repo;

    public function __construct(TableRepository $table_repo, FollowerRepository $follower_repo)
    {
        $this->table_repo = $table_repo;
        $this->follower_repo = $follower_repo;
    }   

    /**
     * Finds user based on id 
     * @param String $name id or username being searched
     * @param String $id id of logged in user 
     * @return Object|null  
     */

    public function findUserWithCounts($name, $id)
    {
        $user_followers = $this->follower_repo->findFollowersById($id);
        array_push($user_followers, -1);

        $answer = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.username', 'u.profile_photo','u.created_at','u.biography',
                'u.background_image',
                DB::raw('COALESCE(lt.followers_count, 0) AS following_count'),
                DB::raw('COALESCE(ltu.followers_count, 0) AS followers_count'),
                DB::raw('COALESCE(tu.tweets_count, 0) AS tweets_count'),
                DB::raw('CASE WHEN u.id IN (' . implode(",", $user_followers) . ') THEN 1 ELSE 0 END AS followed_user')
            ]) 
            ->leftJoinSub($this->table_repo->followerTempTable('user_id'), 'lt', function ($join) {
                $join->on('lt.user_id', '=', 'u.id');
            })
            ->leftJoinSub($this->table_repo->followerTempTable('following_id'), 'ltu', function ($join) {
                $join->on('ltu.following_id', '=', 'u.id');
            })
            ->leftJoinSub($this->table_repo->tweetUserTable(), 'tu', function ($join) {
                $join->on('tu.user_id', '=', 'u.id');
            })
            ->where('u.id', $name)
            ->orWhere('u.username', '=', $name)
            ->first();

        return $answer;
    }

    /**
     * Finds users based on search
     * 
     * @param string $search
     * @param string $id
     */

    public function findUsersBySearch($search, $id)
    {
        // push impossible value in case empty array
        $user_followers = $this->follower_repo->findFollowersById($id);

        array_push($user_followers, -1);

        $answer = DB::table('users AS u')
            ->select([
                'u.id', 'u.name', 'u.username', 'u.profile_photo',
                DB::raw('COALESCE(followers_count, 0) AS followers_count'),
                DB::raw('CASE WHEN u.id IN ( ' . implode(",", $user_followers) . ') THEN 1 ELSE 0 END AS follower_user')
            ])
            ->leftJoinSub($this->table_repo->followerTempTable('user_id'), 'lt', function ($join) {
                $join->on('lt.user_id', '=', 'u.id');
            })
            ->where('name', 'like', $search . '%')
            ->orderBy('followers_count', 'desc')
            ->limit(10)
            ->get();

        return $answer;
    }

    public function updateUser($user_id, $request)
    {
        $user = DB::table('users')->where('id', $user_id)->first();
        $profile_photo = $request->file('profile_photo');
        $background_image = $request->file('background_image');
        $data = [];

        if ($profile_photo) {
            $arr = explode('/', $user->profile_photo);
            if ($user->profile_photo !== "https://insta611.s3.amazonaws.com/images/ironThrone.jpg") {
                Storage::disk('s3')->delete('images/' . end($arr));
            }
            $profile_name = 'images/' . $profile_photo->getClientOriginalName() . Carbon::now()->timestamp;  
            Storage::disk('s3')->put($profile_name, file_get_contents($profile_photo));
            $data += ['profile_photo' => Storage::disk('s3')->url($profile_name)];
        }

        if ($background_image) {
            $arr = explode('/', $user->background_image);
            if ($user->background_image !== "https://insta611.s3.amazonaws.com/images/nightsky.jpg") {
                Storage::disk('s3')->delete('images/' . end($arr));
            }
            $background_name = 'images/' . $background_image->getClientOriginalName() . Carbon::now()->timestamp;
            Storage::disk('s3')->put($background_name, file_get_contents($background_image));
            $data +=['background_image' =>  Storage::disk('s3')->url($background_name)];
        }
        $data += ['name' => $request->input('name')];
        $data += ['biography' => $request->input('biography')];

        DB::table('users')->where('id', $user_id)->update($data);
        $user = User::where('id', $user_id)->first();

        return $user;
    }

}