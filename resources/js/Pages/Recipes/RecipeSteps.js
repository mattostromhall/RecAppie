import React, { useContext } from 'react'
import {RecipeContext} from '../../app'
import RecipeStep from './RecipeStep'

export default function RecipeSteps() {
    const { steps } = useContext(RecipeContext)

    return (
        <section className="text-gray-600 body-font w-full max-w-2xl">
            {steps.map((step, index) =>
                <RecipeStep
                    key={step.id}
                    step={step}
                    lastStep={steps.length - 1 === index}
                />
            )}
        </section>
    )
}