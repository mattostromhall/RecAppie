import React, {useContext} from 'react'
import {RecipeContext} from '../../app'
import {useForm} from '@inertiajs/inertia-react'
import SubmitButton from '../../Components/SubmitButton'
import TextInput from '../../Components/TextInput'
import TextSelectInput from '../../Components/TextSelectInput'

export default function AddRecipeIngredient() {
    const { recipe } = useContext(RecipeContext)
    const {data, setData, post, processing, reset, errors} = useForm({
        ingredient: '',
        quantity: null,
        unit: ''
    })
    const unitOptions = [
        {display: 'G', value: 'g'},
        {display: 'Kg', value: 'kg'},
        {display: 'Ml', value: 'ml'},
        {display: 'L', value: 'l'},
        {display: 'Oz', value: 'oz'},
        {display: 'Fl.oz', value: 'fl.oz'},
        {display: 'Lb', value: 'lb'},
        {display: 'Tsp', value: 'tsp'},
        {display: 'Tbsp', value: 'tbsp'},
    ]

    function submit(e) {
        e.preventDefault()
        post(`/recipes/${recipe.id}/steps`, {
            onSuccess: () => reset('instruction')
        })
    }

    return (
        <form
            className="w-full max-w-sm"
            onSubmit={submit}
        >
            <h2 className="text-xl font-medium">Add Ingredient</h2>
            <div className="mt-3">
                <TextInput
                    label="Ingredient"
                    value={data.ingredient}
                    error={errors.ingredient}
                    handleChange={e => setData('ingredient', e.target.value)}
                />
                <TextSelectInput
                    options={unitOptions}
                />
                <SubmitButton
                    text="Add"
                    disabled={processing}
                />
            </div>
        </form>
    )
}