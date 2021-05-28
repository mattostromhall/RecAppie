import React from 'react'

export default function RecipeStep() {
    return (
        <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-200 pointer-events-none"/>
            </div>
            <div
                className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP
                    1</h2>
                <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica.
                    Kinfolk bespoke try-hard cliche palo santo offal.</p>
            </div>
        </div>
    )
}