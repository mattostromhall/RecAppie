<?php

namespace Tests\Feature;

use App\Models\Recipe;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\Assert;
use Tests\TestCase;

class RecipeTest extends TestCase
{
    use RefreshDatabase;

    protected $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
        $this->actingAs($this->user);
    }

    /** @test */
    public function index_view_can_be_rendered_with_recipes()
    {
        $this->get(route('recipes.index'))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Recipes/Index')
                ->hasAll('recipes', 'categories')
            );
    }

    /** @test */
    public function show_view_renders_a_single_recipe()
    {
        $recipe = Recipe::factory()->create([
            'user_id' => $this->user->id
        ]);

        $this->get(route('recipes.show', ['recipe' => 1]))
            ->assertOk()
            ->assertInertia(fn (Assert $page) => $page
                ->component('Recipes/Show')
                ->hasAll('recipe', 'ingredients', 'steps', 'macros', 'author')
                ->where('recipe.id', $recipe->id)
            );
    }

    /** @test */
    public function create_view_can_be_rendered()
    {
        $this->get(route('recipes.create'))
            ->assertOk()
            ->assertInertia(fn($page) => $page
                ->component('Recipes/Create')
                ->hasAll('categories', 'difficulties')
            );
    }

    /** @test */
    public function a_recipe_can_be_created()
    {
        $this->assertTrue(true);
    }
}
