const Prismic = require('@prismicio/client');

var apiEndpoint = 'https://unspellable.cdn.prismic.io/api/v2';

const Client = Prismic.client(apiEndpoint);

export async function getSortedEpisodesData() {
  const response = await Client.query(
    Prismic.Predicates.at('document.type', 'episode'),
  );
  if (response) {
    // response is the response object, response.results holds the documents
    const allEpisodesData = response.results.map((episode) => {
      const id = episode.id;
      const date = episode.first_publication_date;

      const title = episode.data.episode_title[0].text;
      const imageURL = episode.data.episode_image.url;

      // Combine the data with the id
      return {
        id,
        date,
        title,
        imageURL,
      };
    });
    // Sort posts by date
    return allEpisodesData.sort((a, b) => {
      if (a.date > b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    // response is the response object, response.results holds the documents
  }
}
