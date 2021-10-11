<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quest;

class QuestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function view($id)
    {
        $quests = Quest::latest()->where(['user_id'=>$id])->get();
        return view('misc.quest', compact(['quests']));
    }

    public function add(Request $request, $id)
    {
        if(strlen($request->quest) > 8)
        {
            if(Quest::create([
                'quest'     => $request->quest,
                'user_id'   => $id
            ])){
                return response()->json([
                    "status" => 200,
                    "message" => "Quest published",
                ]);
            }
        }else{
            return response()->json([
                "status" => 404,
                "message" => "Quest wasn't published, too few words",
            ]);
        }

        
    }

    public function delete($id)
    {
        return Quest::find($id)->delete();
    }
}
