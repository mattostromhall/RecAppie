require('./bootstrap')

import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    delay: 0,
    color: 'rgb(99, 102, 241)',
    includeCSS: true,
    showSpinner: false,
})

const el = document.getElementById('app')

render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={name => require(`./Pages/${name}`).default}
    />,
    el
)
