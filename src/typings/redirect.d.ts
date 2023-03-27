/**
 * Types for Elo Redirect
 */

type Redirect = {
    _id: string
    createdAt: string
    updatedAt: string
    type: 'redirect'
    /** Redirect Name used for Internal Refernce Purposes */
    name: string
    slug: {
        current: string
    },
    targetURL: string
    networkStatus: string
}