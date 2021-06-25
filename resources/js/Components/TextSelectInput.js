import React from 'react'

export default function TextSelectInput({textLabel, textName, selectLabel, selectName, textValue, selectValue, options, handleTextChange, handleSelectChange, error}) {
    return (
        <div>
            <label
                htmlFor={textName}
                className="block text-sm font-medium text-gray-700"
            >
                {textLabel}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    id={textName}
                    name={textName}
                    type="text"
                    className="block w-full p-2 pr-12 sm:text-sm border-gray-300 rounded-md outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    value={textValue}
                    onChange={handleTextChange}
                    required
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                    <label
                        htmlFor={selectName}
                        className="sr-only"
                    >
                        {selectLabel}
                    </label>
                    <select
                        id={selectName}
                        name={selectName}
                        className="h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        value={selectValue}
                        onChange={handleSelectChange}
                        required
                    >
                        {options.map(option => (
                                <option value={option.value}>{option.display}</option>
                            )
                        )}
                    </select>
                </div>
            </div>
            {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
        </div>
    )
}