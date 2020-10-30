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
        return [
            'id' => $this->id,
            'followed_user' => $this->followed_user,
            'follower_user' => [
                'id' => $this->follower_id,
                'name' => $this->name,
                'username' => $this->username,
                'profile_photo' => $this->profile_photo,
                'biography' => $this->biography
            ]
        ];
    }
}
