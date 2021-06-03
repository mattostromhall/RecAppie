import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import App from '../../Layouts/App'
import MainNav from '../../Components/MainNav'

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: ''
    })

    return (
            <App title={'Create New | RecAppie'}>
                <MainNav />
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-col text-center w-full">
                            <h2 className="uppercase text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Add new</h2>
                            <h1 className="uppercase sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Recipe</h1>
                        </div>
                    </div>
                </section>
            </App>
    )
}