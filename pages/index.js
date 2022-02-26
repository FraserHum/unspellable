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

const HomeTopDiv = styled.div`
    display: flex;
    flex-direction: column;
    aspect-ratio: 16/9;
`
const BannerEpisodeDiv = styled.div`
    display: grid;
    grid-template-areas: 'stack';
    background-color: #200070;
    min-height: 40vh;
    > * {
        grid-area: stack;
    }
`

const StyledEpisodeCard = styled(EpisodeCard)`
    place-self: center;
    text-align: center;
    line-height: 1;
    font-style: italic;
    padding: 5vh 2vw;

    position: relative;
    align-self: center;
    color: #fff;
    text-align: center;
    padding: 1rem;
    place-content: left;
    margin: 2vw;
    min-width: 50vw;
    max-width: 80vw;
    max-height: 40vw;
`

const StyledImg = styled.img`
    --background-img-brightness: 1;
    --background-img-saturate: 1;

    object-fit: cover;
    height: 100%;
    min-height: 33vh
    /* decrease brightness to improve text contrast */
    filter: brightness(var(--background-img-brightness))
        saturate(var(--background-img-saturate));
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
            <Header menu={menu} pageData={doc.data} />
            <HomeTopDiv>
                <BannerEpisodeDiv>
                    <picture>
                        <StyledImg
                            src={doc.data.homepage_banner[0].image.url}
                            alt={doc.data.homepage_banner[0].image.alt}
                        />
                    </picture>
                    <StyledEpisodeCard
                        id={episodeData.id}
                        date={episodeData.date}
                        title={episodeData.title}
                        imageURL={episodeData.imageURL}
                    />
                </BannerEpisodeDiv>
            </HomeTopDiv>
            <Container>
                <SliceZone sliceZone={doc.data.page_content} />
            </Container>
        </DefaultLayout>
    )
}
