import React, {useRef, useState} from 'react'
import {createPopper} from '@popperjs/core'

export default function MultiSelectInput({values = [], setValues, options}) {
    const [isOpen, setIsOpen] = useState(false)
    const display = useRef(null)
    const dropdown = useRef(null)
    const search = useRef(null)
    const htmlForValues = values.map(value => (
        <span key={value} className="flex items-center bg-indigo-200 rounded py-0.5 px-1 my-0.5 select-none">
            <span>{value}</span>
            <span className="mb-0.5 ml-1 text-base leading-none">&times;</span>
        </span>)
    )

    function open() {
        setIsOpen(true, () => {
            search.current.focus()
        })
    }

    function handleBackspace(e) {
        if (e.key === 'Backspace') {
            console.log('backspace')
        }
    }

    function setupPopper() {
        if(this.popper === undefined) {
            this.popper = createPopper(display.current, dropdown.current, {
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
            this.popper.update()
        }
    }


    return (
        <div className="relative">
            <button
                className={`w-full flex flex-wrap items-center space-x-1 text-left p-1 rounded-md shadow-sm border border-gray-300 focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                type="button"
                ref={display}
                onClick={open}
                onKeyDown={handleBackspace}
            >
                {values.length > 0 ? (
                    htmlForValues
                    ) : (
                    <span className="py-0.5 px-1 my-0.5 select-none">
                        <span>Please select</span>
                    </span>
                    )}
            </button>
            {isOpen &&
                <div
                    className="absolute z-10 w-full mt-1 p-2 bg-gray-100 rounded shadow"
                    ref={dropdown}
                >
                    <input
                        className="block mt-1 p-2 w-full rounded-md shadow-sm border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        type="text"
                        placeholder="Search..."
                        ref={search}
                    />
                </div>
            }
            </div>
    )
}