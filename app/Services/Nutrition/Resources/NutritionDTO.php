<?php

namespace App\Services\Nutrition\Resources;

class NutritionDTO
{
    public function __construct(
        public string $name,
        public int $calories,
        public int $carbohydrates,
        public int $fat,
        public int $protein
    ) {}
}