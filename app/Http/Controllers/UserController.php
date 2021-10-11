<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function profile()
    {
        $user = Auth::user();
        if($user)
        {
            return response()->json([
                "status"    => "202",
                "user"      => $user,
            ]);
        }
        else{
            return response()->json([
                "status"    => "404",
                "message"   => "User not authenticated",
            ]);
        }
    }
}
