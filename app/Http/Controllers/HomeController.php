<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Info;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $users = User::latest()->paginate(10);

        return view('home', compact('users'));
    }

    public function me(){
        $me = Auth::user();
        $intel = $me->info;
        $info = true;
        foreach($intel as $f){
            if($f)
            {   
                $info = true;
            }else{
                $info = false;
            }
        }
        return view('pages.private.profile', compact(['me', 'info']));
    }

    public function fireworks(){
        $users = User::latest()->paginate(10);

        return view('pages.public.fireworks', compact('users'));
    }

    public function update(Request $request, $id)
    {
        $user = User::find($id);
        if($user->info){
            $user->info->update(
                $request->all()
            );
            return response()->json([
                "status" => 200,
            ]);
        }else{
            $info = new Info;
            $info->user_id = $id;
            $info->save();

            $user->info->update(
                $request->all()
            );
            return response()->json([
                "status" => 200,
                "q" => $request->data,
            ]);
        }
    }

    public function info($id)
    {
        if($id > 0)
        {
            $user = User::find($id);
            $info = $user->info;
            if($info){
                return response()->json([
                    'status' => 200,
                    'user'   => $info,
                ]);
            }else{
                $info = new Info;
                $info->userid = $id;
                $info->save();

                return response->json([
                    'status' => 200,
                    'user'   => $info,
                ]);
            }
        }else{
            return response()->json([
                'status' => 404
            ]);
        }
    }
}
