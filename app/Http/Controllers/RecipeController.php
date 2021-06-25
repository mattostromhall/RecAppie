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
            'recipes' => Recipe::orderBy('id', 'desc')->paginate(15)
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
        return Inertia::render('Recipes/Create', [
            'difficulties' => Recipe::difficulties()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
            'prep' => ['numeric','required', 'between:1,120'],
            'cook' => ['numeric','required', 'between:1,120'],
            'serves' => ['numeric','required', 'between:1,20'],
            'difficulty' => ['string', 'required', function ($attribute, $value, $fail) {
                if (!in_array($value, ['easy', 'medium', 'hard'])) {
                    $fail('The '.$attribute.' is not a valid difficulty.');
                }
            }],
        ]);

        $validated['user_id'] = auth()->id();

        $recipe = Recipe::create($validated);

        return redirect(
            route('recipes.edit', $recipe)
        );
    }

    public function edit(Recipe $recipe)
    {
        return Inertia::render('Recipes/Edit', [
            'recipe' => $recipe,
            'ingredients' => $recipe->ingredients,
            'steps' => $recipe->orderedSteps()
        ]);
    }
}
