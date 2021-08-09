import React, {useContext, useState} from 'react'
import {useForm} from '@inertiajs/inertia-react'
import {RecipeContext} from '../../app'

export default function EditRecipePicture() {
    const { recipe } = useContext(RecipeContext)
    const { setData, post } = useForm({
        picture: null,
    })
    const [picture, setPicture] = useState(recipe.picture ? `/storage/images/${recipe.picture}` : 'https://dummyimage.com/720x400')
    const [selected, setSelected] = useState(false)

    function handlePictureChange(e) {
        setData('picture', e.target.files[0])
        setPicture(URL.createObjectURL(e.target.files[0]))
        setSelected(true)
    }

    function uploadPicture(e) {
        e.preventDefault()
        post(`/recipes/${recipe.id}/picture`, {
            onSuccess: () => setSelected(false)
        })
    }

    return (
        <form onSubmit={uploadPicture}>
            <div className="flex justify-center">
                <div className="relative w-48 rounded-sm">
                    <div className="absolute inset-0 rounded-sm bg-gray-700 bg-opacity-60 z-10 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-100" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <img
                        className="w-48 rounded-sm opacity-75"
                        src={picture}
                        alt=""
                    />
                    <input
                        className="absolute w-48 overflow-hidden h-full opacity-0 top-0 left-0 z-10 rounded-sm cursor-pointer"
                        type="file"
                        onChange={handlePictureChange}
                    />
                </div>
            </div>
            <button
                className="inline-flex items-center mt-3 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                type="submit"
                disabled={!selected}
            >
                Upload
            </button>
        </form>
    )
}