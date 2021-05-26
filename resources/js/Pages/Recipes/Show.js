import React from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'

export default function Show() {
    return (
        <App title="Dashboard | RecAppie">
            <MainNav />
            <RecipeSteps />
        </App>
    )
}