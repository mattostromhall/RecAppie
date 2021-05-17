import React, { useEffect } from 'react'

export default function Guest({ title, children }) {
    useEffect(() => {
        document.title = title
    }, [title])

    return (
        <div>
            {children}
        </div>
    )
}