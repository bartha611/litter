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

    Route::group(['prefix' => 'tweet'], function() {
        Route::get('/', 'TweetController@news');
        Route::post('/{tweet}/likes', 'LikesController@store');
        Route::delete('/{tweet}/likes', 'LikesController@destroy');
    });

    Route::group(['prefix' => '/user/{user}'], function() {
        Route::get('/likes', 'LikesController@show');
        Route::get('/follower', 'FollowerController@follower');
        Route::post('/follower', 'FollowerController@store');
        Route::get('/following', 'FollowerController@following');
        Route::get('/tweet', 'TweetController@index');
        Route::delete('/following', 'FollowerController@destroy');
    });

    Route::resource('tweet.reply', 'ReplyController', ['except' => ['edit', 'create']])->shallow();

    Route::resource('tweet', 'TweetController', ['except' => ['index', 'edit', 'create']]);

    Route::delete('/likes/{likes}', 'LikesController@destroy');
});
