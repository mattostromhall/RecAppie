import React from 'react'
import SearchInput from '../../Components/SearchInput'
import MultiSelectInput from '../../Components/MultiSelectInput'

export default function RecipeFilters({search, setSearch, categories, selectedCategories, setSelectedCategories}) {
    return (
        <section className="flex space-x-6 max-w-screen-xl mx-auto p-6">
            <div className="max-w-xs">
                <SearchInput
                    name="search"
                    label="Search"
                    value={search}
                    handleChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className="max-w-xs w-full">
                <label
                    htmlFor="categories"
                    className="block font-medium text-sm text-gray-700 mb-1"
                >
                    Categories
                </label>
                <MultiSelectInput
                    id="categories"
                    options={categories}
                    values={selectedCategories}
                    setValues={(values) => setSelectedCategories([...values])}
                />
            </div>
        </section>
    )
}