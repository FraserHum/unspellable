import * as prismic from '@prismicio/client';
import client from './prismicHelpers';

async function fetchDocs(page = 1, routes = []) {
  const response = await client.get({
    pageSize: 100,
    lang: '*',
    page,
  });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
}

/** Fetches all prismic documents and filters them (eg. by document type).
 *  In production, you would probably query documents by type instead of filtering them.
 * */
export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter(filter);
};

export const homePageQuery = async () => {
  const allRoutes = await fetchDocs();
  return allRoutes.filter((doc) => doc.type === 'Episode').slice(0, 5);
};

export async function predicateQuery(type, predicate, order) {
  const response = await client.get({
    filters: [prismic.filter.at(type, predicate)],
    orderings: order,
  });
  if (response) {
    return response;
  }
  return null;
}

export const getFirstOrLastbyType = async (
  type,
  getFirst = false,
  tags = [],
) => {
  const order = getFirst ? 'asc' : 'desc';
  const response = client.get({
    filters: [
      prismic.filter.at('document.type', type),
      prismic.filter.at('document.tags', tags),
    ],
    pageSize: 1,
    page: 1,
    orderings: [{ field: 'document.first_publication_date', direction: order }],
  });

  return response;
};
