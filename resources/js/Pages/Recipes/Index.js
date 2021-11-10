import React, {useEffect, useRef, useState} from 'react'
import MainNav from '../../Components/MainNav'
import App from '../../Layouts/App'
import RecipeCard from './RecipeCard'
import Pagination from '../../Components/Pagination'
import RecipeFilters from './RecipeFilters'
import {Inertia} from '@inertiajs/inertia'
import useDebounce from '../../hooks/useDebounce'

export default function Index({recipes, categories}) {
    const [search, setSearch] = useState('')
    const [selectedCategories, setSelectedCategories] = useState([])
    const debouncedSearch = useDebounce(search)
    const selectedCategoryIds = selectedCategories.map(category => category.id).join()
    const initialRender = useRef(true);

    const recipeCards = recipes.data.map(recipe => (
        <RecipeCard
            key={recipe.id}
            recipe={recipe}
        />
    ))
    const noResults = <div>
        <p>No results found for: {search}</p>
    </div>

    function filterRecipes() {
        if (initialRender.current) {
            return initialRender.current = false
        }
        Inertia.get('recipes', {
            search: debouncedSearch,
            categories: selectedCategoryIds
        }, {
            replace: true,
            preserveState: true
        })
    }

    useEffect(filterRecipes,
        [debouncedSearch, selectedCategories]
    )

    return (
        <App title="Dashboard | RecAppie">
            <MainNav />
            <RecipeFilters
                search={search}
                setSearch={setSearch}
                categories={categories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
            />
            <section className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6 p-6">
                {recipes.data.length > 0
                    ? recipeCards
                    : noResults
                }
            </section>
            <section className="max-w-screen-xl mx-auto p-6">
                <Pagination links={recipes.links} />
            </section>
        </App>
    )
}