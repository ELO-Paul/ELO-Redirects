import React from 'react'
import redirectAPI from '@/lib/redirects'
import ListRedirects from './components/listRedirects'
import Link from 'next/link'

interface iProps {
  params: {
    slug: string
  }
}

const Home = async () => {

  const data: Promise<Redirect[]> = redirectAPI.getRedirects()
  const redirects = await data

  return (
    <main>
      <div>
        <h1>ELO Redirect App</h1>
        <p>
          This page is only visible during development.
        </p>
        <p>
          If we launch the application, the root URL will redirect to <Link href='https://elo.health'>https://elo.health</Link> 
        </p>
        <ListRedirects />        
      </div>
    </main>
  )
}

export default Home