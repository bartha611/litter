<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRepliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('replies', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reply_tweet_id')->index();
            $table->unsignedBigInteger('tweet_id')->index();

            $table->foreign('tweet_id')->references('id')->on('tweets')->onDelete('CASCADE');
            $table->foreign('reply_tweet_id')->references('id')->on('tweets')->onDelete('CASCADE');

            $table->unique('reply_tweet_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('replies');
    }
}
