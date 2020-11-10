<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class FollowerCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        
        $response = [
            'id' => $this->id,
            'followed_user' => $this->followed_user
        ];
        if (isset($this->following_id)) {
            $response['following_user'] = [
                'id' => $this->following_id,
                'name' => $this->name,
                'username' => $this->username,
                'profile_photo' => $this->profile_photo
            ];
        } else {
            $response['follower_user'] = [
                'id' => $this->follower_id,
                'name' => $this->name,
                'username' => $this->username,
                'profile_photo' => $this->profile_photo
            ];
        }
        return $response;
    }
}
