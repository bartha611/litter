<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['user_id', 'tweet_id', 'comment'];

    protected $dates = ['created_at', 'updated_at'];

    protected $hidden = ['created_at', 'user_id', 'tweet_id'];

    public function user()
    {
        return $this->belongsTo(User::class)->select('name', 'id', 'email');
    }

    public function tweet()
    {
        return $this->belongsTo(Tweet::class);
    }
}
