<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTweetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tweets', function (Blueprint $table) {
            $table->id();
            $table->text('tweet');

            $table->unsignedBigInteger('user_id')->index();
            $table->unsignedBigInteger('retweet_id')->nullable();
            $table->unsignedBigInteger('reply_tweet_id')->nullable();

            $table->foreign('retweet_id')->references('id')->on('tweets')->onDelete('CASCADE');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('CASCADE');
            $table->foreign('reply_tweet_id')->references('id')->on('tweets')->onDelete('CASCADE');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tweets');
    }
}
