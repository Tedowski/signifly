<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Worker extends Model
{
    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
