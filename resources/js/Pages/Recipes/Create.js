import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'
import MainNav from '../../Components/MainNav'
import TextInput from '../../Components/TextInput'
import TextAreaInput from '../../Components/TextAreaInput'
import SubmitButton from '../../Components/SubmitButton'

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: ''
    })

    const handleTitleChange = (e) => {
        setData('title', e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setData('description', e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        post('/recipes')
    }

    return (
            <App title={'Create New | RecAppie'}>
                <MainNav />
                <section className="text-gray-600 body-font flex flex-col items-center">
                    <div className="container px-5 pt-12 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h2 className="uppercase text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Add new</h2>
                            <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Recipe</h1>
                        </div>
                    </div>
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div>
                                <TextInput
                                    label="Title"
                                    value={data.title}
                                    error={errors.title}
                                    handleChange={handleTitleChange}
                                />
                            </div>
                            <div className="mt-3">
                                <TextAreaInput
                                    label="Description"
                                    value={data.description}
                                    error={errors.description}
                                    handleChange={handleDescriptionChange}
                                />
                            </div>
                            <div className="mt-3">
                                <SubmitButton
                                    text="Create"
                                    disabled={processing}
                                />
                            </div>
                        </form>
                    </div>
                </section>
            </App>
    )
}