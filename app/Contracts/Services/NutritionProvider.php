<?php

namespace App\Contracts\Services;

use Illuminate\Http\Client\PendingRequest;

interface NutritionProvider
{
    public function scaffoldRequest(): PendingRequest;

    public function ingredient(string $name, int|string $quantity, string|null $unit);

    public function ingredientSet(array $set);
}