import React, { useContext } from 'react'
import {RecipeContext} from '../../app'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function RecipeInfo() {
    const { recipe } = useContext(RecipeContext)

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col items-end">
                    <InertiaLink
                        className="inline-flex items-center mt-3 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                        href={`/recipes/${recipe.id}/edit`}
                    >
                        Edit
                    </InertiaLink>
                </div>
                <div className="flex flex-col text-center w-full">
                    <h2 className="uppercase text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Instructions for</h2>
                    <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{recipe.title}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{recipe.description}</p>
                </div>
            </div>
        </section>
    )
}