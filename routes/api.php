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
Route::get('/tweet/{name}', 'TweetController@index');
Route::get('/user', 'UserController@index');
// Route::post('/photo', 'PhotoController@create');

Route::middleware(['api', 'jwt.verify'])->group(function () {
    Route::get('/tweet', 'TweetController@news');
    Route::resource('photo', 'PhotoController');
    Route::resource('tweet', 'TweetController', ['except' => ['index']]);
    Route::resource('follower', 'FollowerController', ['only' => ['store', 'destroy', 'index', 'show']]);
    Route::resource('tweet.comment', 'CommentController', ['except' => ['edit', 'create']])->shallow();
});
