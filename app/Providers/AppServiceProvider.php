<?php

namespace App\Providers;

use App\Contracts\NutritionProvider;
use App\Services\CalorieNinja;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton(NutritionProvider::class, function() {
            return new CalorieNinja(config('services.nutrition.provider.key'));
        });
    }

    public function boot()
    {
        //
    }
}
