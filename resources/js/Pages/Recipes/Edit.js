import React  from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'
import RecipeInfo from './RecipeInfo'
import {RecipeContext} from '../../app'

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
                <section className="flex">
                    <RecipeSteps />
                </section>
            </RecipeContext.Provider>
        </App>
    )
}