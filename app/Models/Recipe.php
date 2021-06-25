<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class);
    }

    public function steps()
    {
        return $this->hasMany(RecipeStep::class);
    }

    public function orderedSteps()
    {
        return $this->steps()
            ->orderByRaw('step_number is null')
            ->orderBy('step_number')
            ->get()
            ->map(function($step, $key) {
                if (!$step->step_number) {
                    $step->step_number = $key + 1;
                }
                return $step;
            });
    }

    public static function difficulties()
    {
        return [
            [
                'value' => 'easy',
                'display' => 'Easy'
            ],
            [
                'value' => 'medium',
                'display' => 'Medium'
            ],
            [
                'value' => 'hard',
                'display' => 'Hard'
            ]
        ];
    }
}
