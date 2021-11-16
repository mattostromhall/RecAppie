import React from 'react'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function NavDropdown({ isOpen }) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
            <InertiaLink href="/logout" method="post" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Logout</InertiaLink>
        </div>
    )
}