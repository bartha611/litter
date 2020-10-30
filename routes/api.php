<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/register', 'UserController@register');
Route::post('/user/login', 'UserController@login');
Route::get('/user', 'UserController@index');
// Route::post('/photo', 'PhotoController@create');

Route::middleware(['api', 'jwt.verify'])->group(function () {
    Route::resource('photo', 'PhotoController');

    Route::get('/tweet', 'TweetController@news');
    Route::get('/tweet/user/{username}', 'TweetController@index');
    Route::resource('tweet.likes', 'LikesController', ['only' => ['store', 'destroy', 'index', 'show']]);
    Route::resource('tweet.reply', 'ReplyController', ['except' => ['edit', 'create']])->shallow();
    Route::resource('tweet', 'TweetController', ['except' => ['index', 'edit', 'create']]);

    Route::resource('follower', 'FollowerController', ['only' => ['store', 'destroy', 'index', 'show']]);
    Route::get('/user/{user}/following', 'FollowerController@following')
});
