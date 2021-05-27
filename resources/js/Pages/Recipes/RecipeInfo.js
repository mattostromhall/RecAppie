import React from 'react'

export default function RecipeInfo({ title, description }) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full">
                    <h2 className="uppercase text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Instructions for</h2>
                    <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{title}</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{description}</p>
                </div>
            </div>
        </section>
    )
}