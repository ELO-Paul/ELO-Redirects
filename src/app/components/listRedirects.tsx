'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const getData = async () => {
    console.log('Executing getDatat')
    const res = await fetch('/api/redirect', {
        method: 'GET',
        headers: {},
        cache: 'no-cache'
    })

    const data = await res.json()
    console.log(data)
    return data
}

const ListRedirects = () => {

    const [loading, setLoading] = useState(true)
    const [redirects, setRedirects] = useState<Redirect[]>([])

    useEffect(() => {

        const fetchData = async () => {
            console.log('executing fetchData')
            const data = await getData()
            setLoading(false)
            setRedirects(data)
        }

        fetchData()

    }, [getData])    

    if (loading) return <>Loading...</>

    if (!loading && redirects.length < 1) return <>No Data...</>

    return (
        <div>
            <h2>Available Redirects</h2>
            <ul>
                {
                    redirects.map((redirect) => {
                        return (
                            <li key={redirect._id}>
                                <Link href={`/${redirect?.slug?.current ?? ''}`}>
                                    {redirect.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>            
        </div>
    )
}

export default ListRedirects