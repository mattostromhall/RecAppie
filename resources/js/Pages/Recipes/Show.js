import React, { createContext }  from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'
import RecipeInfo from './RecipeInfo'

const RecipeContext = createContext({})

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

export { RecipeContext }