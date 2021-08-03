import React from 'react'
import {InertiaLink} from '@inertiajs/inertia-react'

export default function Pagination({links}) {
    const pages = links.map((link) => {
        if (link.url === null) {
            return <div key={link.label} className="mr-1 mb-1 px-4 py-3 text-sm leading-4 text-gray-400 border rounded" dangerouslySetInnerHTML={{__html: link.label}} />
        }
        return <InertiaLink key={link.label} className="mr-1 mb-1 px-4 py-3 text-sm leading-4 border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500" href={link.url} dangerouslySetInnerHTML={{__html: link.label}} />
        }
    )

    const pageLinks = links.length > 3 ? <div className="flex flex-wrap -mb-1">{pages}</div> : ''

    return (pageLinks)
}
