<?php

namespace Database\Seeders;

use App\Models\Recipe;
use App\Models\RecipeStep;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(20)
            ->has(
                Recipe::factory()
                    ->has(RecipeStep::factory()->count(5), 'steps')
                    ->count(5)
            )
            ->create();
    }
}
