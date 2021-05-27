import React from 'react'
import { useForm } from '@inertiajs/inertia-react'

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: ''
    })
}