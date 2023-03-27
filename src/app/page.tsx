import React from 'react'
import redirectAPI from '@/lib/redirects'
import ListRedirects from './components/listRedirects'

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
          This page is only visible during development. In the future this page will simply redirect to the elo.health home page.
        </p>
        <ListRedirects />        
      </div>
    </main>
  )
}

export default Home