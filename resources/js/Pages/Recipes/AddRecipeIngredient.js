import React, {useContext} from 'react'
import {RecipeContext} from '../../app'
import {useForm} from '@inertiajs/inertia-react'
import SubmitButton from '../../Components/SubmitButton'
import TextInput from '../../Components/TextInput'
import TextSelectInput from '../../Components/TextSelectInput'

export default function AddRecipeIngredient() {
    const { recipe } = useContext(RecipeContext)
    const {data, setData, post, processing, reset, errors} = useForm({
        name: '',
        quantity: '',
        unit: ''
    })
    const unitOptions = [
        {display: 'N/a', value: ''},
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
        post(`/recipes/${recipe.id}/ingredients`, {
            onSuccess: () => reset('name', 'quantity', 'unit')
        })
    }

    return (
        <form
            className="w-full"
            onSubmit={submit}
        >
            <h2 className="text-xl font-medium">Add Ingredient</h2>
            <div className="mt-3">
                <TextInput
                    label="Ingredient"
                    value={data.name}
                    error={errors.name}
                    handleChange={e => setData('name', e.target.value)}
                />
                <TextSelectInput
                    options={unitOptions}
                    error={errors.quantity}
                    textValue={data.quantity}
                    selectValue={data.unit}
                    handleTextChange={e => setData('quantity', e.target.value)}
                    handleSelectChange={e => setData('unit', e.target.value)}
                />
                <SubmitButton
                    text="Add"
                    disabled={processing}
                />
            </div>
        </form>
    )
}