/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Header, HomeBanner } from 'components'
import DefaultLayout from 'layouts'
import utilStyles from '../styles/utils.module.css'
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
                <HomeBanner banner={doc.data.homepage_banner[0]} />
                <SliceZone sliceZone={doc.data.page_content} />

                <section className={utilStyles.headingMd}>
                    <p>
                        Welcome to the home of our D&D podcast! Here you will
                        find all our episodes as well as aditional content about
                        us and the world we play in
                    </p>
                    <p>
                        This podcast is intended for mature audicences, check
                        episode notes for trigger warnings
                    </p>
                </section>
            </div>
        </DefaultLayout>
    )
}
