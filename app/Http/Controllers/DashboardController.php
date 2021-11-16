<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function __invoke(): Response
    {
        return Inertia::render('Dashboard', [
            'recipes' => Recipe::query()
                ->orderByDesc('created_at')
                ->take(6)
                ->get()
        ]);
    }
}
