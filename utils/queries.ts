import Prismic from '@prismicio/client'
import client from './prismicHelpers'

async function fetchDocs(page = 1, routes = []) {
    const response = await client.get({
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
    const response = await client.get(Prismic.filter.at(type, predicate), order)
    if (response) {
        return response
    }
    return null
}

export const fetchIDByType = async (type) => {
    const response = await client.get(Prismic.filter.at(type), order)
    if (response) {
        return response
    }
    return null
}

export const getFirstOrLastbyType = async (
    type,
    getFirst = false,
    tags = []
) => {
    const order = getFirst ? '' : 'desc'
    const response = client.get(
        [
            Prismic.Predicates.at('document.type', type),
            Prismic.Predicates.at('document.tags', tags),
        ],
        {
            pageSize: 1,
            page: 1,
            orderings: `[document.first_publication_date ${order}]`,
        }
    )

    return response
}
