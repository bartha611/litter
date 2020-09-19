<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $fillable = ['tweet_id', 'reply_tweet_id'];

    public $timestamps = false;
}
