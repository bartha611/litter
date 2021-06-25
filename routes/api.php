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

Route::post('/user/register', ['as' => 'user.register', 'uses' => 'UserController@register']);
Route::post('/user/login', ['as' => 'user.login', 'uses' => 'UserController@login']);
Route::get('/user', ['as' => 'user.index', 'uses' => 'UserController@index']);
// Route::post('/photo', 'PhotoController@create');

Route::middleware(['api', 'jwt.verify'])->group(function () {
    Route::resource('photo', 'PhotoController');
    Route::get('/tweet', ['as' => 'tweet.news', 'uses' => 'TweetController@news']);

    Route::group(['prefix' => 'tweet/{tweet}'], function () {
        Route::get('/likes', ['as' => 'likes.getUsers', 'uses' => 'LikesController@getUsers']);
        Route::get('/retweets', ['as' => 'tweet.findUsersRetweet', 'uses' => 'TweetController@findUsersRetweet']);
        Route::post('/likes', ['as' => 'likes.store', 'uses' => 'LikesController@store']);
        Route::delete('/likes', ['as' => 'likes.destroy', 'uses' => 'LikesController@destroy']);
    });

    Route::group(['prefix' => '/user/{user}'], function () {
        Route::post('', 'UserController@update');
        Route::get('/likes', ['as' => 'likes.show', 'uses' => 'LikesController@show']);
        Route::get('/follower', ['as' => 'follower.follower', 'uses' => 'FollowerController@follower']);
        Route::post('/follower', ['as' => 'follower.store', 'uses' => 'FollowerController@store', 'follower.store']);
        Route::get('/following', ['as' => 'follower.following', 'uses' => 'FollowerController@following']);
        Route::get('/tweet', ['as' => 'tweet.index', 'uses' => 'TweetController@index']);
    });

    Route::group(['prefix' => '/notification'], function () {
        Route::get('', 'NotificationController@show');
        Route::get('/read', 'NotificationController@update');
    });

    Route::resource('tweet.reply', 'ReplyController', ['except' => ['edit', 'create']])->shallow();

    Route::resource('tweet', 'TweetController', ['except' => ['index', 'edit', 'create']]);

    Route::delete('/follower/{follower}', ['as' => 'follower.destroy', 'uses' => 'FollowerController@destroy']);
});
