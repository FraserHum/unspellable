import Prismic from '@prismicio/client'
import { Client } from './prismicHelpers'

async function fetchDocs(page = 1, routes = []) {
    const response = await Client().query('', {
        pageSize: 100,
        lang: '*',
        page,
    })
    const allRoutes = routes.concat(response.results)
    if (response.results_size + routes.length < response.total_results_size) {
        return fetchDocs(page + 1, allRoutes)
    }
    return [...new Set(allRoutes)]
}

/** Fetches all Prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 * */
export const queryRepeatableDocuments = async (filter) => {
    const allRoutes = await fetchDocs()
    return allRoutes.filter(filter)
}

export const homePageQuery = async () => {
    const allRoutes = await fetchDocs()
    return allRoutes.filter((doc) => doc.type === 'Episode').slice(0, 5)
}

export async function predicateQuery(type, predicate, order) {
    const response = await Client().query(
        Prismic.Predicates.at(type, predicate),
        order
    )
    if (response) {
        return response
    }
    return null
}

export const fetchIDByType = async (type) => {
    const response = await Client().query(
        Prismic.Predicates.at(type, predicate),
        order
    )
    if (response) {
        return response
    }
    return null
}
