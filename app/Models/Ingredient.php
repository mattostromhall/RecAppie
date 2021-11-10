<?php

namespace App\Models;

use App\Events\IngredientCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ingredient extends Model
{
    use HasFactory;
    
    protected $guarded = [];

    protected $dispatchesEvents = [
        'created' => IngredientCreated::class
    ];

    public function recipe(): BelongsTo
    {
        return $this->belongsTo(related: Recipe::class);
    }
}
