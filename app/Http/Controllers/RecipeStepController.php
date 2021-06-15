<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\RecipeStep;
use Illuminate\Http\Request;

class RecipeStepController extends Controller
{
    public function store(Request $request, Recipe $recipe)
    {
        $recipe->steps()->create(
            $request->validate([
                'instruction' => 'required|string|min:2'
            ])
        );

        return back();
    }

    public function update(Request $request, RecipeStep $recipeStep)
    {
        $recipeStep->update(
            $request->validate([
                'instruction' => 'required|string|min:2'
            ])
        );

        return back();
    }

    public function destroy(RecipeStep $recipeStep)
    {
        $recipeStep->delete();

        return back();
    }
}
