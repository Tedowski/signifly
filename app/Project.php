<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = [];

    public function workers()
    {
        return $this->belongsToMany(Worker::class);
    }
}
