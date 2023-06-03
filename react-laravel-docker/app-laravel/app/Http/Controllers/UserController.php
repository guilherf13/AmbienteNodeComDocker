<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    
    public function index()
    {
        $teste = [
            "email"=>"guilhermeccb222@gmail.com",
            "password"=>"123senhaboa"
        ];

        return response()->json($teste);
    }

    
    public function store(Request $request)
    {
        //
    }

   
    public function show(string $id)
    {
        //
    }

   
    public function update(Request $request, string $id)
    {
        //
    }

   
    public function destroy(string $id)
    {
        //
    }
}
