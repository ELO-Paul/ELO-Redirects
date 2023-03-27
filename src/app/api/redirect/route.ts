import { NextResponse } from "next/server"
import { sanityClient } from '@/lib'
import { groq } from 'next-sanity'

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url)
  // const redirect = searchParams.get("redirect")

  console.log('running api query')
  const query = groq`*[_type=='redirect']`

  try {
    const res = sanityClient.fetch(query)    
    const data = await res    
    return NextResponse.json(data)
  } catch (e) {
    console.log('No Data Returned')
    return NextResponse.json([])
  }
}
