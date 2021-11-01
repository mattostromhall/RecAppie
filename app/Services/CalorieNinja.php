<?php

namespace App\Services;

use App\Contracts\NutritionProvider;

class CalorieNinja implements NutritionProvider
{
    public function __construct(protected string $apiKey)
    {
    }
}