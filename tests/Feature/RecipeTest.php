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
    use RefreshDatabase,
        WithFaker;

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
            ->assertInertia(fn(Assert $page) => $page
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

        $this->get(route('recipes.show', ['recipe' => $recipe->id]))
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page
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
    public function edit_view_renders_a_single_recipe()
    {
        $recipe = Recipe::factory()->create([
            'user_id' => $this->user->id
        ]);

        $this->get(route('recipes.edit', ['recipe' => $recipe->id]))
            ->assertOk()
            ->assertInertia(fn(Assert $page) => $page
                ->component('Recipes/Edit')
                ->hasAll('recipe', 'ingredients', 'steps')
                ->where('recipe.id', $recipe->id)
            );
    }

    /** @test */
    public function a_recipe_can_be_created()
    {
        $this->post(route('recipes.store'), [
            'title' => 'Test title',
            'description' => 'Test Description',
            'prep' => $this->faker->numberBetween(0, 60),
            'cook' => $this->faker->numberBetween(0, 60),
            'serves' => $this->faker->numberBetween(0, 10),
            'difficulty' => 'easy',
            'categories' => []
        ])
            ->assertRedirect(route('recipes.edit', ['recipe' => 1]));

        $this->assertDatabaseHas(Recipe::class, [
            'title' => 'Test title',
            'description' => 'Test Description'
        ]);
    }

    /** @test */
    public function validation_errors_are_thrown_for_incorrect_recipe_data_when_creating()
    {
        $this->post(route('recipes.store'), [
            'title' => 'Test title',
            'description' => 'Test Description',
            'categories' => []
        ])
            ->assertSessionHasErrors();

        $this->assertDatabaseMissing(Recipe::class, [
            'title' => 'Test title',
            'description' => 'Test Description'
        ]);
    }
}
