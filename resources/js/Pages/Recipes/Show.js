import React, {useState} from 'react'
import {RecipeContext} from '../../app'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeSteps from './RecipeSteps'
import RecipeInfo from './RecipeInfo'
import RecipeIngredients from './RecipeIngredients'

export default function Show({ recipe, ingredients, steps, author }) {
    const [activeTab, setActiveTab] = useState('instructions')
    const activeClasses = 'flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1 focus:outline-none'
    const inactiveClasses = 'flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 focus:outline-none'

    return (
        <App title={`${recipe.title} | RecAppie`}>
            <MainNav />
            <RecipeContext.Provider value={{recipe, ingredients, steps, author}}>
                <RecipeInfo />
                <div className="flex mb-4 max-w-2xl mx-auto">
                    <button
                        type="button"
                        className={activeTab === 'instructions' ? activeClasses : inactiveClasses}
                        onClick={() => setActiveTab('instructions')}
                    >
                        Instructions
                    </button>
                    <button
                        type="button"
                        className={activeTab === 'ingredients' ? activeClasses : inactiveClasses}
                        onClick={() => setActiveTab('ingredients')}
                    >
                        Ingredients
                    </button>
                </div>
                {activeTab === 'instructions' &&
                    <section className="flex justify-center py-12">
                        <RecipeSteps />
                    </section>
                }
                {activeTab === 'ingredients' &&
                <section className="flex justify-center py-12">
                    <RecipeIngredients />
                </section>
                }
            </RecipeContext.Provider>
        </App>
    )
}