<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quest extends Model
{
    use HasFactory;

    protected $table = 'quests';

    protected $fillable = [
        'user_id',
        'quest'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
