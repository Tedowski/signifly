<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function store()
    {
        $data = request()->validate([
            'name' => 'required',
            'description' => 'required',
            'budget' => ['required', 'integer'],
            'timeframe' => 'required'
        ]);

        \App\Project::create([
            'company_name' => $data['name'],
            'description' => $data['description'],
            'budget' => $data['budget'],
            'time_frame' => $data['timeframe'],
        ]);
    }
}
