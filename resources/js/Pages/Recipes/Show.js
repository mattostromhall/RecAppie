import React from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'
import RecipeInfo from './RecipeInfo'

export default function Show({ recipe, steps }) {
    return (
        <App title={`${recipe.title} | RecAppie`}>
            <MainNav />
            <RecipeInfo
                title={recipe.title}
                description={recipe.description}
            />
            <RecipeSteps steps={steps} />
        </App>
    )
}