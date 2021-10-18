import React from 'react'

export default function SearchInput({label, name, value, handleChange, error}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block font-medium text-sm text-gray-700"
            >
                {label}
            </label>
            <input
                id={name}
                name={name}
                type="search"
                className="block mt-1 p-2 w-full rounded-md shadow-sm border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={value}
                onChange={handleChange}
            />
            {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
        </div>
    )
}