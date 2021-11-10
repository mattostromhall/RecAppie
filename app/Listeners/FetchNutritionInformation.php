<?php

namespace App\Listeners;

use App\Events\IngredientCreated;
use Illuminate\Contracts\Queue\ShouldQueue;

class FetchNutritionInformation implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function handle(IngredientCreated $event): void
    {
        dd($event);
    }
}
