<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Collection;

class Recipe extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(related: User::class);
    }

    public function ingredients(): HasMany
    {
        return $this->hasMany(related: Ingredient::class);
    }

    public function steps(): HasMany
    {
        return $this->hasMany(related: RecipeStep::class);
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(related: Category::class)
            ->withTimestamps();
    }

    public function attachCategories(Array $categories)
    {
        $ids = collect($categories)
            ->map(fn($category) => $category['id'])
            ->toArray();

        $this->categories()->attach($ids);
    }

    public function orderedSteps(): Collection
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

    public static function difficulties(): array
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
