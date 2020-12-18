<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use App\Photo;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\UnauthorizedException;
use \Tymon\JWTAuth\Facades\JWTAuth;

class PhotoController extends Controller
{

    /**
     * displays list of photos from authenticated user
     * 
     * @return \Illuminate\Http\JsonResponse
     */

    public function index()
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $photos = Photo::where('user_id', $user_id);
        return response()->json($photos);
    }

    /**
     * @param ImageRequest $request
     * @return JsonResponse
     */
    public function create(Request $request): JsonResponse
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $file = $request->file('image');
        $name = time() . $file->getClientOriginalName();
        Storage::disk('s3')->put($filepath, file_get_contents($file));
        $photo = Photo::create([
            'user_id' => $user_id,
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'url' => $filepath
        ]);
        return response()->json($photo);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */

    public function show(Request $request): JsonResponse
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $photos = Photo::with('user')->where('user_id', '=', $user_id)->get();
        return response()->json($photos);
    }

    /**
     * deletes a photo from authenticated user
     * 
     * @param Request
     * @return JsonResponse
     */

    public function destroy($photo)
    {
        $user_id = JWTAuth::parseToken()->toUser()->id;
        $photo = Photo::where('user_id', $user_id)->where('id', $photo)->first();
        if (!$photo) {
            throw new UnauthorizedException('Not authorized to delete photo');
        }
        Storage::disk('s3')->delete($photo->url);
        $photo->delete();
        return response()->json($photo);
    }
}
