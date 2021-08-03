import React from 'react'
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
                            <div className="flex flex-wrap justify-center text-sm space-x-5 mt-4">
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                    </svg>
                                    <div className="font-semibold">
                                        <p>Prep - {recipe.prep} mins</p>
                                        <p>Cook - {recipe.cook} mins</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
                                    </svg>
                                    <p className="font-semibold capitalize">{recipe.difficulty}</p>
                                </div>
                                <div className="flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                    </svg>
                                    <p className="font-semibold capitalize">Serves - {recipe.serves}</p>
                                </div>
                            </div>
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
                                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        }
                    </div>
                </section>
            </RecipeContext.Provider>
        </App>
    )
}