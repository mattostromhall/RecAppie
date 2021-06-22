import React  from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'
import {RecipeContext} from '../../app'
import AddRecipeStep from './AddRecipeStep'

export default function Edit({ recipe, steps }) {

    return (
        <App title={`Edit ${recipe.title} | RecAppie`}>
            <MainNav />
            <RecipeContext.Provider value={{recipe, steps}}>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 pt-12 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h2 className="uppercase text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Edit</h2>
                            <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{recipe.title}</h1>
                        </div>
                    </div>
                </section>
                <section className="flex justify-around py-12">
                    {steps.length > 0
                        ? <RecipeSteps />
                        : <h2 className="flex items-center font-semibold text-xl">
                            Add a recipe step to get started!
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </h2>
                    }
                    <AddRecipeStep />
                </section>
            </RecipeContext.Provider>
        </App>
    )
}