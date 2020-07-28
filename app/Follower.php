<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Follower extends Model
{
    protected $fillable = ['user_id', 'follower_id'];

    protected $dates = ['created_at', 'updated_at'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function tweets()
    {
        return $this->hasMany(Tweet::class, 'user_id', 'follower_id');
    }

    public function FollowedUser()
    {
        return $this->belongsTo(User::class, 'follower_id');
    }

}
