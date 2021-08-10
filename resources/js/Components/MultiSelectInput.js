import React, {useEffect, useRef, useState} from 'react'
import {createPopper} from '@popperjs/core'

export default function MultiSelectInput({values = [], setValues, options, displayKey = 'name', valueKey = 'id'}) {
    const [isOpen, setIsOpen] = useState(false)
    const displayValues = useRef(null)
    const dropdown = useRef(null)
    const search = useRef(null)
    const selectOptions = useRef(null)
    let popper = undefined
    const valuesHtml = values.map(value => (
        <span key={value} className="flex items-center bg-indigo-200 rounded py-0.5 px-1 my-0.5 select-none">
            <span>{value}</span>
            <span className="mb-0.5 ml-1 text-base leading-none">&times;</span>
        </span>)
    )
    const optionsHtml = options.map(option => (
        <li
            className={`mt-1 py-2 px-3 rounded hover:bg-gray-200`}
            key={value(option)}
        >
            {display(option)}
        </li>)
    )

    useEffect(() => {
        if (isOpen) {
            search.current.focus()
            setupPopper()
        }
    }, [isOpen])

    function open() {
        setIsOpen(true)
    }

    function handleBackspace(e) {
        if (e.key === 'Backspace') {
            console.log('backspace')
        }
    }

    function setupPopper() {
        if(popper === undefined) {
            popper = createPopper(displayValues.current, dropdown.current, {
                placement: 'bottom',
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 5],
                        },
                    },
                ],
            })
        } else {
            popper.update()
        }
    }

    function value(option) {
        return valueKey ? option[valueKey] : option
    }

    function display(option) {
        return displayKey ? option[displayKey] : option
    }


    return (
        <div className="relative">
            <button
                className={`w-full flex flex-wrap items-center space-x-1 text-left p-1 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                type="button"
                ref={displayValues}
                onClick={open}
                onKeyDown={handleBackspace}
            >
                {values.length > 0 ? (
                    valuesHtml
                    ) : (
                    <span className="py-0.5 px-1 my-0.5 select-none">
                        <span>Please select</span>
                    </span>
                    )}
            </button>
            {isOpen &&
                <div
                    className="absolute z-10 w-full p-2 bg-gray-100 rounded shadow"
                    ref={dropdown}
                >
                    <input
                        className="block mt-1 p-2 w-full rounded-md shadow-sm border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="Search..."
                        ref={search}
                    />
                    <ul
                        className="relative overflow-y-auto max-h-24 cursor-pointer"
                        ref={selectOptions}
                    >
                        {optionsHtml}
                </ul>

                </div>
            }
            </div>
    )
}