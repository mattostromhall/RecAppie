import React from 'react'
import SearchInput from '../../Components/SearchInput'

export default function RecipeFilters({search, setSearch}) {
    return (
        <section className="max-w-screen-xl mx-auto p-6">
            <div className="max-w-xs">
                <label htmlFor="search">Search</label>
                <SearchInput
                    id="search"
                    value={search}
                    handleChange={e => setSearch(e.target.value)}
                />
            </div>
        </section>
    )
}