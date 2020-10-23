<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tweet extends Model
{
    protected $fillable = ['tweet', 'user_id'];

    protected $dates = ['created_at', 'updated_at'];

    protected $hidden = ['created_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function replies()
    {
        return $this->hasMany(Tweet::class, 'reply_tweet_id');
    }

    public function likes()
    {
        return $this->hasMany(Likes::class);
    }

    public function retweets()
    {
        return $this->hasMany(Tweet::class, 'retweet_id');
    }

}
