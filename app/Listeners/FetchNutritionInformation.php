<?php

namespace App\Listeners;

use App\Contracts\Services\NutritionProvider;
use App\Events\IngredientCreated;
use Illuminate\Contracts\Queue\ShouldQueue;

class FetchNutritionInformation implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct(protected NutritionProvider $nutritionProvider)
    {
        //
    }

    public function handle(IngredientCreated $event): void
    {
        $ingredient = $event->ingredient;

        $ingredientNutrition = $this->nutritionProvider->ingredient(
            name: $ingredient->name,
            quantity: $ingredient->quantity,
            unit: $ingredient->unit
        );

        $ingredient->update([
            'calories' => $ingredientNutrition->calories,
            'carbohydrates' => $ingredientNutrition->carbohydrates,
            'fat' => $ingredientNutrition->fat,
            'protein' => $ingredientNutrition->protein
        ]);
    }
}
