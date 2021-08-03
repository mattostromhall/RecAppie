<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class RecipePictureController extends Controller
{
    public function __invoke(Request $request, Recipe $recipe)
    {
        if (!$request->picture->isValid()) {
            return ValidationException::withMessages([
                'picture' => 'Uploaded file is invalid'
            ]);
        }
        $path = $request->picture->store('public/images');
        $recipe->update([
            'picture' => Str::afterLast($path, '/')
        ]);

        return back();
    }
}
