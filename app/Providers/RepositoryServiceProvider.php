<?php

namespace App\Providers;

use App\Repository\Eloquent\LikesRepository;
use App\Repository\Eloquent\TweetRepository;
use App\Repository\FollowerRepository;
use App\Repository\FollowerRepositoryInterface as RepositoryFollowerRepositoryInterface;
use App\Repository\LikesRepositoryInterface;
use Illuminate\Support\ServiceProvider;
use App\Repository\UserRepository;
use FollowerRepositoryInterface;
use UserRepositoryInterface;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(FollowerRepositoryInterface::class, FollowerRepository::class);
        $this->app->bind(RepositoryFollowerRepositoryInterface::class, TweetRepository::class);
        $this->app->bind(LikesRepositoryInterface::class, LikesRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
