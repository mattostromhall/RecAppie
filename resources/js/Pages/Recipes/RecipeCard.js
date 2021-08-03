import React from 'react'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function RecipeCard({ recipe }) {
    return (
        <div className="flex flex-col h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <InertiaLink href={`recipes/${recipe.id}`}>
                {recipe.picture
                    ? <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`/storage/images/${recipe.picture}`} alt={recipe.title} />
                    : <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" />
                }
            </InertiaLink>
            <div className="p-6 flex flex-col h-full">
                <h2 className="title-font text-lg font-semibold text-gray-900 mb-3">{recipe.title}</h2>
                <p className="leading-relaxed mb-3">{recipe.description}</p>
                <div className="flex items-center flex-wrap mt-auto">
                    <InertiaLink
                        className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                        href={`recipes/${recipe.id}`}
                    >
                        View recipe
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                             fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"/>
                            <path d="M12 5l7 7-7 7"/>
                        </svg>
                    </InertiaLink>
                </div>
            </div>
        </div>
    )
}