/** */
import client from './sanity.client'
import { groq } from 'next-sanity'

const redirectAPI = {

    /** GET ALL REDIRECTS */
    async getRedirects() {

        const query = groq`*[_type=='redirect']`
        
        try {
            const res = client.fetch(query)
            return res
        } catch (e) {
            return undefined
        }
    },

    /** 
     * getRedirect
     * Get a single redirect value
     * */
    async getRedirect(slug: string) {
        const query = groq`*[_type=='redirect' && slug.current == '${slug}']`

        try {
            const res = client.fetch(query)
            return res
        } catch (e) {
            return undefined
        }
    }
}

export default redirectAPI