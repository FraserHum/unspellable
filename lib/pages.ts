import { predicateQuery } from '../utils/queries';

export async function getAllPageIds() {
  const pages = predicateQuery('document.type', 'page').then((pagesData) =>
    pagesData.results.map((page) => ({
      params: {
        id: page.uid,
      },
    }))
  );

  return pages;
}

export async function getPageData(id) {
  const page = await predicateQuery('my.page.uid', id);

  return {
    id,
    ...page.results[0],
  };
}
