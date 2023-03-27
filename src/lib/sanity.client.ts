import { createClient } from "next-sanity";

const projectId=`2ys5jb8x`
const apiVersion=`2022-11-16`
const dataset='production'

export const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})

export default sanityClient