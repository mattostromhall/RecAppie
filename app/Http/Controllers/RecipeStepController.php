<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
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
}
