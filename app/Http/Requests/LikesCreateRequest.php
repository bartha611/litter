<?php

namespace App\Http\Requests;

use App\Likes;
use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class LikesCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $like = Likes::where([
            'user_id' => JWTAuth::toUser()->id,
            'tweet_id' => $this->route('tweet')->id
        ])->first();

        return !$like ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
        ];
    }
}
