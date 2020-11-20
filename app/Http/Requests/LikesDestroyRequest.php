<?php

namespace App\Http\Requests;

use App\Likes;
use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class LikesDestroyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $likes = Likes::where('tweet_id', $this->route('tweet')->id)
            ->where('user_id', JWTAuth::toUser()->id)
            ->first();
        
        return isset($likes->id);
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
