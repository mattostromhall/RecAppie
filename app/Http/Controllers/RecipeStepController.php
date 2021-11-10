<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\RecipeStep;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RecipeStepController extends Controller
{
    public function store(Request $request, Recipe $recipe): RedirectResponse
    {
        $recipe->steps()->create(
            $request->validate([
                'instruction' => 'required|string|min:2'
            ])
        );

        return back();
    }

    public function update(Request $request, RecipeStep $recipeStep): RedirectResponse
    {
        $recipeStep->update(
            $request->validate([
                'instruction' => 'required|string|min:2'
            ])
        );

        return back();
    }

    public function destroy(RecipeStep $recipeStep): RedirectResponse
    {
        $recipeStep->delete();

        return back();
    }
}
