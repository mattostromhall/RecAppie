import React, {useContext} from 'react'
import {RecipeContext} from '../../app'
import DeleteRecipeIngredient from './DeleteRecipeIngredient'

export default function RecipeIngredients() {
    const { ingredients, macros } = useContext(RecipeContext)

    return (
        <section className="text-gray-600 body-font w-full max-w-2xl px-3">
            {ingredients.length > 0 &&
                <div className="-mt-3">
                    <div className="flex flex-wrap justify-center text-sm space-x-5">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <p>Calories - {macros.calories}</p>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <p className="font-semibold capitalize">Carbohydrates - {macros.carbohydrates}g</p>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <p className="font-semibold capitalize">Fat - {macros.fat}g</p>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <p className="font-semibold capitalize">Protein - {macros.protein}g</p>
                        </div>
                    </div>
                    <h2 className="font-medium mb-3 text-lg px-3 mt-3">Recipe ingredients</h2>
                </div>
            }
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id} className="flex justify-between items-center border-t border-indigo-200 p-3">
                        <p className="font-semibold">
                            <span className="w-14 h-10 inline-block text-center font-bold rounded p-2 bg-indigo-700 text-indigo-100">{ingredient.quantity}{ingredient.unit}</span>
                            <span className="ml-3">{ingredient.name}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}