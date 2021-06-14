import React, {useContext} from 'react'
import {RecipeContext} from '../../app'
import {useForm} from '@inertiajs/inertia-react'
import TextAreaInput from '../../Components/TextAreaInput'
import SubmitButton from '../../Components/SubmitButton'

export default function AddRecipeStep() {
    const { recipe } = useContext(RecipeContext)
    const {data, setData, post, processing, reset, errors} = useForm({
        instruction: ''
    })

    function submit(e) {
        e.preventDefault()
        post(`/recipes/${recipe.id}/steps`, {
            onSuccess: () => reset('instruction')
        })
    }

    return (
        <form
            className="w-full max-w-md"
            onSubmit={submit}
        >
            <h2 className="text-xl font-medium">Add Step</h2>
            <div className="mt-3">
                <TextAreaInput
                    label="Instructions"
                    value={data.instruction}
                    error={errors.instruction}
                    handleChange={e => setData('instruction', e.target.value)}
                />
                <SubmitButton
                    text="Add"
                    disabled={processing}
                />
            </div>
        </form>
    )
}