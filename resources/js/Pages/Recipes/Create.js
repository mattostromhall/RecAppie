import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'
import MainNav from '../../Components/MainNav'
import TextInput from '../../Components/TextInput'
import TextAreaInput from '../../Components/TextAreaInput'
import SubmitButton from '../../Components/SubmitButton'
import NumberInput from '../../Components/NumberInput'
import SelectInput from '../../Components/SelectInput'
import MultiSelectInput from '../../Components/MultiSelectInput'

export default function Create({categories, difficulties}) {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        prep: 0,
        cook: 0,
        serves: 1,
        difficulty: 'easy',
        categories: []
    })

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
                    <div className="w-full sm:max-w-md my-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <form onSubmit={submit}>
                            <div>
                                <TextInput
                                    label="Title"
                                    value={data.title}
                                    error={errors.title}
                                    handleChange={e => setData('title', e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <TextAreaInput
                                    label="Description"
                                    value={data.description}
                                    error={errors.description}
                                    handleChange={e => setData('description', e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <NumberInput
                                    label="Prep time (mins)"
                                    value={data.prep}
                                    error={errors.prep}
                                    handleChange={e => setData('prep', e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <NumberInput
                                    label="Cooking time (mins)"
                                    value={data.cook}
                                    error={errors.cook}
                                    handleChange={e => setData('cook', e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <NumberInput
                                    label="Serves"
                                    value={data.serves}
                                    error={errors.serves}
                                    handleChange={e => setData('serves', e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <SelectInput
                                    label="Difficulty"
                                    value={data.difficulty}
                                    options={difficulties}
                                    error={errors.difficulty}
                                    handleChange={e => setData('difficulty', e.target.value)}
                                />
                            </div>
                            <div className="mt-3">
                                <MultiSelectInput
                                    options={categories}
                                    values={data.categories}
                                    setValues={(values) => setData('categories', values)}
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