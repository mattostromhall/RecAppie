import React from 'react'
import MainNav from '../Components/MainNav'
import App from '../Layouts/App'
import RecipeCard from './Recipes/RecipeCard'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function Dashboard({recipes}) {
    const recipeCards = recipes.map(recipe => (
        <RecipeCard
            key={recipe.id}
            recipe={recipe}
        />
    ))

    return (
        <App title="Dashboard | RecAppie">
            <MainNav />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="max-w-screen-xl mx-auto mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Latest Recipes</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded" />
                        </div>
                        <p className="w-full leading-relaxed text-gray-500 mt-3">Take a look at the latest recipes that have been uploaded, or take a look at our recipe library <InertiaLink href="/recipes" className="text-indigo-500 font-semibold hover:underline">here</InertiaLink>.</p>
                    </div>
                    <section className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6 p-6">
                        {recipes.length > 0 && recipeCards}
                    </section>
                </div>
            </section>
        </App>
    )
}