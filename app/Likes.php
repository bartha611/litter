<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Likes extends Model
{
    protected $fillable = ['user_id', 'tweet_id'];

    protected $dates = ['created_at', 'updated_at'];

}
