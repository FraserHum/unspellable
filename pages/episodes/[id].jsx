import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import DefaultLayout from '../../layouts'
import { getAllEpisodeIds, getEpisodeData } from '../../lib/episodes'

export async function getStaticProps({ params }) {
    const episodeData = await getEpisodeData(params.id)
    return {
        props: {
            episodeData,
        },
    }
}
export async function getStaticPaths() {
    const paths = await getAllEpisodeIds()
    return {
        paths,
        fallback: false,
    }
}

export default function Episode({ episodeData }) {
    return (
        <DefaultLayout>
            <Head>
                <title>{episodeData[0].data.episode_title[0].text}</title>
            </Head>
            {episodeData[0].data.episode_title[0].text}
            <br />
            <Image
                priority
                src={episodeData[0].data.episode_image.url}
                height={144}
                width={144}
            />
            <br />
            {episodeData.date}
            <iframe
                title="video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/IO9XlQrEt2Y"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </DefaultLayout>
    )
}
