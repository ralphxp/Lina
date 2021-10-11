<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Info extends Model
{
    use HasFactory;
    protected $table = "users_info";

    protected $fillable = [
        'user_id',
        'FullName',	
        'country',	
        'state',
        'city',	
        'address',	
        'job',	
        'income',	
        'daily_spend',	
        'race',	
        'hair_color',	
        'eye_color',	
        'gender',	
        'marital_status',	
        'education',	
        'relationship',	
        'woman',	
        'dob',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
