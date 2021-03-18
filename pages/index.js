/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header, Banner, Container } from 'components'
import DefaultLayout from 'layouts'
import Date from '../utils/date'

import Client from '../utils/prismicHelpers'
import { SliceZone } from '../components'

export async function getStaticProps({ preview = null, previewData = {} }) {
    const { ref } = previewData

    const client = Client()

    const doc = (await client.getSingle('home', ref ? { ref } : null)) || {}
    const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}
    return {
        props: {
            doc,
            menu,
            preview,
        },
    }
}

export default function Home({ doc, menu }) {
    return (
        <DefaultLayout home>
            <div className="homepage">
                <Header menu={menu} />
                <Banner banner={doc.data.homepage_banner[0]} />
                <Container>
                    <SliceZone sliceZone={doc.data.page_content} />
                </Container>
            </div>
        </DefaultLayout>
    )
}
