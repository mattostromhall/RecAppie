<?php

namespace App\Services;

use App\Contracts\Services\NutritionProvider;
use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Http;

class CalorieNinja implements NutritionProvider
{
    public function __construct(
        protected string $baseUrl,
        protected string $apiKey,
        protected int $timeout = 10,
        protected int|null $retryTimes = null,
        protected int|null $retrySleep = null
    ) {}

    public function scaffold(): PendingRequest
    {
        return Http::baseUrl(url: $this->baseUrl)
            ->timeout(seconds: $this->timeout)
            ->retry(
                times: $this->retryTimes,
                sleep: $this->retrySleep
            );
    }
}