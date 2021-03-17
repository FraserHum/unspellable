import { predicateQuery } from '../utils/queries'

export async function getSortedEpisodesData() {
    const response = await predicateQuery('document.type', 'episode')
    // response is the response object, response.results holds the documents
    const allEpisodesData = response.results.map((episode) => {
        const id = episode.uid
        const date = episode.first_publication_date

        const title = episode.data.episode_title[0].text
        const imageURL = episode.data.episode_image.url

        // Combine the data with the id
        return {
            id,
            date,
            title,
            imageURL,
        }
    })
    // Sort posts by date
    return allEpisodesData.sort((a, b) => {
        if (a.date > b.date) {
            return 1
        }
        return -1
    })

    // response is the response object, response.results holds the documents
}

export async function getAllEpisodeIds() {
    const episodes = predicateQuery('document.type', 'episode').then(
        (episodesData) =>
            episodesData.results.map((episode) => ({
                params: {
                    id: episode.uid,
                },
            }))
    )

    return episodes
}

export async function getEpisodeData(id) {
    const episode = await predicateQuery('my.episode.uid', id)

    return {
        id,
        ...episode.results,
    }
}
