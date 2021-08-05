import React from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeCard from './RecipeCard'
import Pagination from '../../Components/Pagination'

export default function Index({ recipes }) {
    const recipeCards = recipes.data.map(recipe => (
        <RecipeCard
            key={recipe.id}
            recipe={recipe}
        />
    ))

    return (
        <App title="Dashboard | RecAppie">
            <MainNav />
            <section className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6 p-6">
                {recipeCards}
            </section>
            <section className="max-w-screen-xl mx-auto p-6">
                <Pagination links={recipes.links} />
            </section>
        </App>
    )
}