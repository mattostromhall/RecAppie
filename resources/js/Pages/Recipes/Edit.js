import React, {useState} from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import EditableRecipeSteps from './EditableRecipeSteps'
import {RecipeContext} from '../../app'
import AddRecipeStep from './AddRecipeStep'
import EditableRecipeIngredients from './EditableRecipeIngredients'
import AddRecipeIngredient from './AddRecipeIngredient'
import EditRecipePicture from './EditRecipePicture'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function Edit({ recipe, ingredients, steps }) {
    return (
        <App title={`Edit ${recipe.title} | RecAppie`}>
            <MainNav />
            <RecipeContext.Provider value={{recipe, ingredients, steps}}>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-12 mx-auto">
                        <div className="flex flex-col items-end">
                            <InertiaLink
                                className="inline-flex items-center mt-3 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                                href={`/recipes/${recipe.id}`}
                            >
                                View
                            </InertiaLink>
                        </div>
                        <div className="flex flex-col text-center w-full">
                            <h2 className="uppercase text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Edit</h2>
                            <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{recipe.title}</h1>
                            <EditRecipePicture recipe={recipe} />
                        </div>
                    </div>
                </section>
                <section className="flex justify-center space-x-12 p-12">
                    <div className="w-full max-w-xs">
                        <AddRecipeIngredient />
                        <EditableRecipeIngredients />
                    </div>
                    <div className="space-y-5">
                        <AddRecipeStep />
                        {steps.length > 0
                            ? <EditableRecipeSteps />
                            : <div className="flex items-start w-full max-w-2xl">
                                <h2 className="font-semibold text-xl">
                                    Add a recipe step to get started!
                                </h2>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 ml-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        }
                    </div>
                </section>
            </RecipeContext.Provider>
        </App>
    )
}