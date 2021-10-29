<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Recipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Recipes/Index', [
            'recipes' => Recipe::query()
                ->orderBy('id', 'desc')
                ->when($request->search, function($query, $search) {
                    return $query->where('title', 'like', $search . '%');
                })
                ->when($request->categories, function($query, $categories) {
                    return $query->whereHas('categories', function (Builder $query) use ($categories) {
                        $query->whereIn('category_id', explode(',', $categories));
                    });
                })
                ->paginate(9)
                ->withQueryString(),
            'categories' => Category::all(),
        ]);
    }

    public function show(Recipe $recipe)
    {
        return Inertia::render('Recipes/Show', [
            'recipe' => $recipe,
            'ingredients' => $recipe->ingredients,
            'steps' => $recipe->orderedSteps(),
            'author' => auth()->user()->can('edit', $recipe)
        ]);
    }

    public function create()
    {
        return Inertia::render('Recipes/Create', [
            'categories' => Category::all(),
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
            }]
        ]);

        $validated['user_id'] = auth()->id();

        $recipe = Recipe::create($validated);

        $recipe->attachCategories($request->categories);

        return redirect(
            route('recipes.edit', $recipe)
        );
    }

    public function edit(Recipe $recipe)
    {
        $this->authorize('edit', $recipe);

        return Inertia::render('Recipes/Edit', [
            'recipe' => $recipe,
            'ingredients' => $recipe->ingredients,
            'steps' => $recipe->orderedSteps()
        ]);
    }
}
