import React, {useContext} from 'react'
import {RecipeContext} from '../../app'
import DeleteRecipeIngredient from './DeleteRecipeIngredient'

export default function RecipeIngredients() {
    const { ingredients } = useContext(RecipeContext)

    return (
        <section className="text-gray-600 body-font w-full max-w-2xl px-3">
            {ingredients.length > 0 &&
                <h2 className="font-medium mb-3 text-lg px-3">Recipe ingredients</h2>
            }
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id} className="flex justify-between items-center border-t border-indigo-200 p-3">
                        <p className="font-semibold">
                            <span className="w-12 h-10 inline-block text-center font-bold rounded p-2 bg-indigo-700 text-indigo-100">{ingredient.quantity}{ingredient.unit}</span>
                            <span className="ml-3">{ingredient.name}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}