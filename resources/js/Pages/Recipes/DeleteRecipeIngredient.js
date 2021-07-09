import React from 'react'
import {useForm} from '@inertiajs/inertia-react'

export default function DeleteRecipeIngredient({id}) {
    const {delete: destroy, processing, errors} = useForm({})

    function deleteIngredient() {
        destroy(`/ingredients/${id}`)
    }

    return (
        <button
            className="rounded-full focus:ring focus:outline-none focus:ring-red-300"
            type="button"
            onClick={deleteIngredient}
            disabled={processing}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        </button>
    )
}