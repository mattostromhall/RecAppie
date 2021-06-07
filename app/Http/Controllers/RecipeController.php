<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index()
    {
        return Inertia::render('Recipes/Index', [
            'recipes' => Recipe::paginate(15)
        ]);
    }

    public function show(Recipe $recipe)
    {
        return Inertia::render('Recipes/Show', [
            'recipe' => $recipe,
            'steps' => $recipe->orderedSteps()
        ]);
    }

    public function create()
    {
        return Inertia::render('Recipes/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string'
        ]);

        $recipe = Recipe::create([
            'user_id' => auth()->id(),
            'title' => $request->title,
            'description' => $request->description
        ]);

        return redirect(
            route('recipes.edit', $recipe)
        );
    }

    public function edit(Recipe $recipe)
    {
        return Inertia::render('Recipes/Edit', [
            'recipe' => $recipe,
            'steps' => $recipe->orderedSteps()
        ]);
    }
}
