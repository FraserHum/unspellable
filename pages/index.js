/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
    Header,
    Banner,
    Container,
    EpisodeCard,
    SliceZone,
} from '../components'
import DefaultLayout from '../layouts'
import Date from '../utils/date'
import Client from '../utils/prismicHelpers'
import { getLatestEpisodeData } from '../lib/episodes'

export async function getStaticProps({ preview = null, previewData = {} }) {
    const { ref } = previewData

    const client = Client()

    const doc = (await client.getSingle('home', ref ? { ref } : null)) || {}
    const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}
    const episodeData = (await getLatestEpisodeData()) || {}

    return {
        props: {
            doc,
            menu,
            episodeData,
            preview,
        },
    }
}

export default function Home({ doc, menu, episodeData }) {
    return (
        <DefaultLayout>
            <Header menu={menu} pageData={doc.data} />
            <Banner banner={doc.data.homepage_banner[0]} />
            <EpisodeCard
                id={episodeData.id}
                date={episodeData.date}
                title={episodeData.title}
                imageURL={episodeData.imageURL}
            />
            <Container>
                <SliceZone sliceZone={doc.data.page_content} />
            </Container>
        </DefaultLayout>
    )
}
