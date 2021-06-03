import React, { useContext } from 'react'
import { RecipeContext } from './Show'
import RecipeStep from './RecipeStep'

export default function RecipeSteps() {
    const { steps } = useContext(RecipeContext)

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto flex flex-wrap">
                <div className="flex flex-wrap justify-center w-full">
                    <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                        {steps.map((step, index) =>
                            <RecipeStep
                                key={step.id}
                                step={step}
                                lastStep={steps.length - 1 === index}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}