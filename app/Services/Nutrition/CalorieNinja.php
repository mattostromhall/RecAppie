<?php

namespace App\Services\Nutrition;

use App\Contracts\Services\NutritionProvider;
use App\Services\Nutrition\Resources\NutritionCollection;
use App\Services\Nutrition\Resources\NutritionDTO;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Http\Client\RequestException;
use Illuminate\Support\Facades\Http;

class CalorieNinja implements NutritionProvider
{
    public function __construct(
        protected string $baseUrl,
        protected string $apiKey,
        protected int $timeout = 10,
        protected int|null $retryTimes = null,
        protected int|null $retrySleep = null
    )
    {
        //
    }

    public function scaffoldRequest(): PendingRequest
    {
        $request = Http::baseUrl(url: $this->baseUrl)
            ->withHeaders(headers: ['X-Api-Key' => $this->apiKey])
            ->timeout(seconds: $this->timeout);

        if ($this->retryTimes !== null && $this->retrySleep !== null) {
            $request->retry(
                times: $this->retryTimes,
                sleep: $this->retrySleep
            );
        }

        return $request;
    }

    /**
     * @throws RequestException
     */
    public function ingredient(string $name, int|string $quantity, string|null $unit = null): NutritionDTO
    {
        $response = $this->scaffoldRequest()
            ->get(
                url: "{$quantity}{$unit} {$name}"
            );

        if ($response->failed()) {
            throw new RequestException(
                response: $response
            );
        }

        $ingredient = $response->collect('items')->first();

        return new NutritionDTO(
            name: $ingredient['name'],
            calories: $ingredient['calories'],
            carbohydrates: $ingredient['carbohydrates_total_g'],
            fat: $ingredient['fat_total_g'],
            protein: $ingredient['protein_g']
        );
    }

    public function ingredientSet(array $set)
    {
        $query = collect($set)->map(function($ingredient) {
             return "{$ingredient['quantity']}{$ingredient['unit']} {$ingredient['name']}";
        })->join(' ');

        $response = $this->scaffoldRequest()
            ->get(
                url: $query
            );

        if ($response->failed()) {
            throw new RequestException(
                response: $response
            );
        }

        return new NutritionCollection(
            items: $response->collect('items')->map(function ($ingredient) {
                return new NutritionDTO(
                    name: $ingredient['name'],
                    calories: $ingredient['calories'],
                    carbohydrates: $ingredient['carbohydrates_total_g'],
                    fat: $ingredient['fat_total_g'],
                    protein: $ingredient['protein_g']
                );
            })
        );
    }
}