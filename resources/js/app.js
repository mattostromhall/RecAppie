require('./bootstrap')

import { App } from '@inertiajs/inertia-react'
import React, {createContext} from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    delay: 0,
    color: 'rgb(99, 102, 241)',
    includeCSS: true,
    showSpinner: true,
})

const el = document.getElementById('app')

export const RecipeContext = createContext({})

render(
    <App
        initialPage={JSON.parse(el.dataset.page)}
        resolveComponent={name => require(`./Pages/${name}`).default}
    />,
    el
)
