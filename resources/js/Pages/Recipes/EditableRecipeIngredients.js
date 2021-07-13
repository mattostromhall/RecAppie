import React, {useContext} from 'react'
import {RecipeContext} from '../../app'
import DeleteRecipeIngredient from './DeleteRecipeIngredient'

export default function EditableRecipeIngredients() {
    const { ingredients } = useContext(RecipeContext)

    return (
        <section>
            {ingredients.length > 0 &&
                <h2 className="font-medium mt-5 mb-3 text-lg">Recipe ingredients</h2>
            }
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id} className="flex justify-between items-center border-t border-indigo-200 py-2">
                        <p className="font-semibold">
                            <span className="font-bold text-indigo-500">{ingredient.quantity}{ingredient.unit}</span> {ingredient.name}
                        </p>
                        <DeleteRecipeIngredient id={ingredient.id} />
                    </li>
                ))}
            </ul>
        </section>
    )
}