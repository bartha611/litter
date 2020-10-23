<?php

namespace App\Http\Requests;

use App\Tweet;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Tymon\JWTAuth\Facades\JWTAuth;

class TweetUpdateDestroyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $tweet = DB::table('tweets')->where('id', $this->route('tweet'))->pluck('user_id');

        return auth()->user()->username == "bartha611";
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'tweet_id' => 'required|exists:App\Tweet,id',
            'tweet' => 'nullable|max:1000'
        ];
    }
}
