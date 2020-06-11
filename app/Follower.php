<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    protected $fillable = ['user_id', 'follower_id'];

    protected $dates = ['created_at', 'updated_at'];

    public function Tweets()
    {
        $this->hasMany(Tweet::class, 'follower_id');
    }

    public function FollowedUser()
    {
        $this->belongsTo(User::class, 'follower_id');
    }
}
