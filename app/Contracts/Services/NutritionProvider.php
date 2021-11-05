<?php

namespace App\Contracts\Services;

use Illuminate\Http\Client\PendingRequest;

interface NutritionProvider
{
    public function scaffold(): PendingRequest;
}