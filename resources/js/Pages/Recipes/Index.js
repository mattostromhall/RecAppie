import React from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeCard from './RecipeCard'

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
            <section className="flex flex-wrap space-x-4">
                {recipeCards}
            </section>
        </App>
    )
}