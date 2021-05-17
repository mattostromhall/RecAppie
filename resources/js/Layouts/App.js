import React, { useEffect } from 'react'

export default function App({ title, children }) {
    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div className="min-h-screen bg-gray-100">
            {children}
        </div>
    )
}