import React, {useEffect, useMemo, useRef, useState} from 'react'
import {createPopper} from '@popperjs/core'

export default function MultiSelectInput({values = [], setValues, options, displayKey = 'name', keyValue = 'id'}) {
    const [isOpen, setIsOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [highlightedIndex, setHighlightedIndex] = useState(0)
    const displayValues = useRef(null)
    const dropdown = useRef(null)
    const searchInput = useRef(null)
    const selectOptions = useRef(null)
    let popper = undefined
    const valuesHtml = values.map(value => (
        <span key={value} className="flex items-center bg-indigo-200 rounded py-0.5 px-1 my-0.5 select-none">
            <span>{value}</span>
            <span className="mb-0.5 ml-1 text-base leading-none">&times;</span>
        </span>)
    )
    const filteredOptions = useMemo(() => filterOptions(), [options, search])
    const optionsHtml = filteredOptions.map((option, index) => (
        <li
            className={`mt-1 py-2 px-3 rounded hover:bg-gray-200 ${index === highlightedIndex ? 'bg-gray-200' : ''}`}
            key={value(option)}
        >
            {display(option)}
        </li>)
    )

    useEffect(() => {
        if (isOpen) {
            searchInput.current.focus()
            setupPopper()
        }
    }, [isOpen])

    function filterOptions() {
        return options.filter(option => {
            if (typeof option === 'object') {
                return matchObjectOption(option)
            }
            return matchOption(option)
        })
    }

    function matchObjectOption(option) {
        return option[displayKey].toLowerCase().startsWith(search.toLowerCase())
            && !values.includes(value(option))
    }

    function matchOption(option) {
        return option.toLowerCase().startsWith(search.toLowerCase())
            && !values.includes(option)
    }

    function open() {
        setIsOpen(true)
    }

    function close() {
        if(!isOpen) return
        setIsOpen(false)
        displayValues.current.focus()
    }

    function select(option) {
        setValues(prevValues => [...prevValues, option])
        setSearch('')
        setHighlightedIndex(0)
        close()
    }

    function selectHighlighted() {
        select(filteredOptions[highlightedIndex])
    }

    function scrollToHighlighted() {
        selectOptions.current.children[highlightedIndex].scrollIntoView({
            block: "nearest"
        })
    }

    function highlight(index) {
        setHighlightedIndex(index)

        if (highlightedIndex < 0) {
            setHighlightedIndex(filteredOptions.length - 1)
        }

        if (highlightedIndex > filteredOptions.length - 1) {
            setHighlightedIndex(0)
        }

        scrollToHighlighted()
    }

    function highlightPrev() {
        highlight(highlightedIndex - 1)
    }

    function highlightNext() {
        highlight(highlightedIndex + 1)
    }

    function handleSearchKeyDown(e) {
        if (e.key === 'Escape') {
            close()
        }
        if (e.key === 'Enter') {
            e.preventDefault()
            selectHighlighted()
        }
        if (e.key === 'ArrowUp') {
            highlightPrev()
        }
        if (e.key === 'ArrowDown') {
            highlightNext()
        }
        if (e.key === 'Tab') {
            e.preventDefault()
        }
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
        return keyValue ? option[keyValue] : option
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
                        ref={searchInput}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                    />
                    {filteredOptions.length > 0 &&
                        <ul
                            className="relative overflow-y-auto max-h-24 cursor-pointer"
                            ref={selectOptions}
                        >
                            {optionsHtml}
                        </ul>
                    }
                    {filteredOptions.length === 0 &&
                        <div className="mt-2 py-2 px-3">
                            No results found {search.length > 0 && <span>for "{search}"</span>}
                        </div>
                    }
                </div>
            }
            </div>
    )
}