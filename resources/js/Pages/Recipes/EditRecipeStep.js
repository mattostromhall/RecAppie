import React from 'react'
import TextAreaInput from '../../Components/TextAreaInput'
import SubmitButton from '../../Components/SubmitButton'
import {useForm} from '@inertiajs/inertia-react'

export default function EditRecipeStep({step, stopEditing}) {
    const {data, setData, put, processing, errors} = useForm({
        instruction: step.instruction
    })

    function update(e) {
        e.preventDefault()
        put(`/steps/${step.id}/update`, {
            onSuccess: () => {
                stopEditing()
            }
        })
    }

    return (
        <form onSubmit={update}>
            <TextAreaInput
                value={data.instruction}
                handleChange={e => setData('instruction', e.target.value)}
                error={errors.instruction}
            />
            <div className="flex items-center">
                <button
                    className="text-xs underline uppercase mt-3 mr-2"
                    onClick={stopEditing}
                >
                    Cancel
                </button>
                <SubmitButton
                    text="Update"
                    disabled={processing}
                />
            </div>
        </form>
    )
}