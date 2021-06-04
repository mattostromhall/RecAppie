import React from 'react'

export default function SubmitButton({text, disabled}) {
    return (
        <button
            type="submit"
            className="inline-flex items-center mt-3 px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"
            disabled={disabled}
        >
            {text}
        </button>
    )
}