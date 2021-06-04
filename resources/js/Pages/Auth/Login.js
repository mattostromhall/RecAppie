import React from 'react'
import Guest from '../../Layouts/Guest'
import { useForm } from '@inertiajs/inertia-react'
import { InertiaLink } from '@inertiajs/inertia-react'
import AppLogo from '../../Components/AppLogo'

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: ''
    })

    const submit = (e) => {
        e.preventDefault()
        post('/login')
    }

    return (
        <Guest title="Login | RecAppie">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                    <InertiaLink href="/register" className="text-sm text-gray-700 underline">Register</InertiaLink>
                </div>
                <AppLogo classes="w-20 h-20 fill-current text-indigo-500" />
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
                    <div className="w-24 mx-auto mt-3 mb-6 border-b-2" />
                    <form onSubmit={submit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                className="block mt-1 p-2 w-full rounded-md shadow-sm border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && <div className="text-red-600 text-sm mt-1">{errors.email}</div>}
                        </div>
                        <div className="mt-3">
                            <label
                                htmlFor="password"
                                className="block font-medium text-sm text-gray-700"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="block mt-1 p-2 w-full rounded-md shadow-sm border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                required
                            />
                            {errors.password && <div className="text-red-600 text-sm mt-1">{errors.password}</div>}
                        </div>
                        <div className="mt-4">
                            <label htmlFor="remember_me" className="inline-flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={e => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center mt-3 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
                            disabled={processing}
                        >
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </Guest>
    )
}