'use client'

/**
 * The following is an example redirect using client
 * side code. In this case, it relies on the browser
 * and no network status code is used as it's not 
 * necessary.
 */

import React, { useEffect, useState } from 'react'
import redirectAPI from '@/lib/redirects'
import Link from 'next/link'

interface iProps {
    params: {
        slug: string
    }
}

/**
 * Because this is a client site component it can't be async at the top level
 */
const Redir = ({ params: { slug } }: iProps) => {

    // Loaded State will be used to verify that an
    // attempt to get redirect data has been made
    const [loaded, setLoaded] = useState(false)
    // rData will store the necessary redirect data
    const [rData, setRData] = useState<Redirect[]>([])

    useEffect(() => {

        const getData = async (slug: string) => {
            try {                
                const req = redirectAPI.getRedirect(slug)
                const data = await req                                
                setRData(data)
                setLoaded(true)
            } catch (e) {
                console.error(e)
                setLoaded(true)
            }
        }

        getData(slug)

    }, [])

    // Wait for the data to be loaded before taking action
    // Display the appropriate message while waiting.
    if (!loaded) {
        return <div>One Moment... We are sending you on to ELO Health!</div>
    }

    // If data has been loaded and there is no data available
    // then this is likely a result of an invalid slug being used.
    // in then simpley send the user to a default location
    // such as Elo.health
    if (loaded && rData.length < 1) {
        window.location.replace('https://elo.health')
        return (<div>No Redirect Data Found</div>)
    }

    const [{
        targetURL,
        networkStatus
    }] = rData

    console.log('Redirecting To: ', targetURL, 'Network Status: ', networkStatus)
    
    // the .replace function ensures that 
    // no location history is stored in the browser
    window.location.replace(targetURL)
 
    return (
        <div>            
            <Link href={targetURL}>
            Click Here if you are not redirected.
            </Link>            
        </div>
    )
}

export default Redir