import React, { useContext } from 'react'
import {RecipeContext} from '../../app'
import EditableRecipeStep from './EditableRecipeStep'

export default function EditableRecipeSteps() {
    const { steps } = useContext(RecipeContext)

    return (
        <section className="text-gray-600 body-font w-full max-w-2xl">
            {steps.map((step, index) =>
                <EditableRecipeStep
                    key={step.id}
                    step={step}
                    lastStep={steps.length - 1 === index}
                />
            )}
        </section>
    )
}