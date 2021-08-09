import React, {useState} from 'react'

export default function MultiSelectInput() {
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function handleBackspace(e) {

    }

    return (
        <div className="relative">
            <button
                className={`w-full flex flex-wrap items-center space-x-1 text-left p-1 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                type="button"
                onClick={open}
                onKeyDown={handleBackspace}
            >
                <span className="flex items-center bg-rss-blue-200 rounded py-0.5 px-1 my-0.5 select-none">
                    <span>selection</span>
                    <span className="mb-0.5 ml-1 text-base leading-none">&times;</span>
                </span>
                <span>placeholder</span>
            </button>
        </div>
    )
}