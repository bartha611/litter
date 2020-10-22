<?php

namespace App\Http\Requests;

use App\Tweet;
use Illuminate\Foundation\Http\FormRequest;

class TweetUpdateDestroyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $tweet = Tweet::find($this->route('tweet'));

        return true;
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
