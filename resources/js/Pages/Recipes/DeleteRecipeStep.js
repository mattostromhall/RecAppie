import React from 'react'
import {useForm} from '@inertiajs/inertia-react'

export default function DeleteRecipeStep({id}) {
    const {delete: destroy, processing, errors} = useForm({})

    function deleteStep() {
        destroy(`/steps/${id}`)
    }

    return (
        <button
            className="flex-shrink-0 w-10 h-10 ml-2 rounded-full bg-red-500 inline-flex items-center justify-center text-white relative z-10 cursor-pointer focus:outline-none focus:ring focus:ring-red-300"
            onClick={deleteStep}
            disabled={processing}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
    )
}