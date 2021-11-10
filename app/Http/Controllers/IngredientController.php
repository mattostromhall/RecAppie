<?php

namespace App\Http\Controllers;

use App\Models\Ingredient;
use App\Models\Recipe;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class IngredientController extends Controller
{
    public function store(Request $request, Recipe $recipe): RedirectResponse
    {
        $recipe->ingredients()->create(
            $request->validate([
                'name' => 'required|string',
                'quantity' => 'required|string',
                'unit' => 'nullable|string'
            ])
        );

        return back();
    }

    public function destroy(Ingredient $ingredient): RedirectResponse
    {
        $ingredient->delete();

        return back();
    }
}
