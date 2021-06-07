import React  from 'react'
import {RecipeContext} from '../../app'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'
import RecipeInfo from './RecipeInfo'

export default function Show({ recipe, steps }) {

    return (
        <App title={`${recipe.title} | RecAppie`}>
            <MainNav />
            <RecipeContext.Provider value={{recipe, steps}}>
                <RecipeInfo />
                <RecipeSteps />
            </RecipeContext.Provider>
        </App>
    )
}