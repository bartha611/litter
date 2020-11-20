<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TweetCollection extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if (!$this->retweet) {
            $retweet_status = null;
        } else {
            $retweet_status = [
                'tweet' => $this->retweet,
                'username' => $this->retweet_username,
                'name' => $this->retweet_name,
                'profile_photo' => $this->profile_photo
            ];
        };

        return [
            'id' => $this->id,
            'tweet' => $this->tweet,
            'updated_at' => $this->updated_at,
            'retweets_count' => $this->retweets_count,
            'replies_count' => $this->replies_count,
            'likes_count' => $this->likes_count,
            'liked_tweet' => $this->liked_tweet,
            'reply_tweet_id' => $this->reply_tweet_id,
            'user' => [
                'id' => $this->user_id,
                'name' => $this->name,
                'username' => $this->username,
                'profile_photo' => $this->profile_photo
            ],
            'retweet_status' => $retweet_status
        ];
    }
}
