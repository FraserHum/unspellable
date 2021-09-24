/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
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

const StyledDiv = styled.div`
    display: grid;
    grid-template-areas: 'stack';
    aspect-ratio: 16/9;
`

const StyledEpisodeCard = styled(EpisodeCard)`
    grid-area: stack;
    align-self: end;
    justify-self: center;
    place-content: center;
    margin: 7vw;
`

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
            <StyledDiv>
                <Banner banner={doc.data.homepage_banner[0]} />
                <Header menu={menu} pageData={doc.data} />
                <StyledEpisodeCard
                    id={episodeData.id}
                    date={episodeData.date}
                    title={episodeData.title}
                    imageURL={episodeData.imageURL}
                />
            </StyledDiv>

            <Container>
                <SliceZone sliceZone={doc.data.page_content} />
            </Container>
        </DefaultLayout>
    )
}
