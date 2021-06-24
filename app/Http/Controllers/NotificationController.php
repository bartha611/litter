<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;

class NotificationController extends Controller
{

    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $this->user = JWTAuth::parseToken()->toUser();
            return $next($request);
        });

    }
    /**
     * Get all Notifications for user
     * @return Response
     *
     */

    public function show(Request $request)
    {
        $unreadNotifications = Auth::user()->unreadNotifications()->limit(20)->get();
        $total               = count($unreadNotifications);

        if ($total < 20) {
            $readNotifications  = Auth::user()->readNotifications()->limit(20 - count($notifications))->get();
            $totalNotifications = array_merge($unreadNotifications, $readNotifications);
        } else {
            $totalNotifications = $unreadNotifications;
        }

        return response()->json($totalNotifications);
    }

    /**
     * Read all
     */
}
