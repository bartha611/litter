<?php

namespace App\Http\Requests;

use App\Follower;
use Illuminate\Foundation\Http\FormRequest;
use Tymon\JWTAuth\Facades\JWTAuth;

class FollowerUpdateDeleteRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $user = $this->route('user');
        $following_user = Follower::where(['user_id' => JWTAuth::toUser()->id, 'following_id' => $user->id])->first();

        return $following_user !== null;
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
