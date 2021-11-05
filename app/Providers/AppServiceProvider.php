<?php

namespace App\Providers;

use App\Contracts\Services\NutritionProvider;
use App\Services\CalorieNinja;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(NutritionProvider::class, function() {
            return new CalorieNinja(
                baseUrl: config('services.nutrition.provider.base_url'),
                apiKey: config('services.nutrition.provider.key'),
                timeout: config('services.nutrition.provider.timeout'),
                retryTimes: config('services.nutrition.provider.retry_times'),
                retrySleep: config('services.nutrition.provider.retry_sleep'),
            );
        });
    }

    public function boot()
    {
        //
    }
}
