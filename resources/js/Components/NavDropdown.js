import React from 'react'
import { Inertia } from '@inertiajs/inertia'

export default function NavDropdown({ isOpen }) {
    function logout(e) {
        e.preventDefault()
        Inertia.post('/logout')
    }

    if (!isOpen) {
        return null
    }

    return (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
            <form onSubmit={logout}>
                <button type="submit" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Logout</button>
            </form>
        </div>
    )
}