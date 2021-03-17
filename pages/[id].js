import React from 'react'

import DefaultLayout from 'layouts'
import { Header, HomeBanner, SliceZone } from 'components'
import { Client } from 'utils/prismicHelpers'

import { List } from '../components/List'
import { getSortedEpisodesData } from '../lib/episodes'
import { getSortedBlogData } from '../lib/blog'
import { getAllPageIds, getPageData } from '../lib/pages'

const Page = ({ listElementsData, doc, menu }) => {
    if (doc && doc.data) {
        return (
            <DefaultLayout>
                <div className={doc.uid}>
                    <Header menu={menu} />
                    <HomeBanner banner={doc.data.page_banner[0]} />
                    <List type={doc.uid} listElementsData={listElementsData} />
                </div>
            </DefaultLayout>
        )
    }

    // Call the standard error page if the document was not found
    return null
}

export async function getStaticPaths() {
    const paths = await getAllPageIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({
    params,
    preview = null,
    previewData = {},
}) {
    const { ref } = previewData

    const client = Client()

    const doc = await getPageData(params.id)
    const menu = (await client.getSingle('menu', ref ? { ref } : null)) || {}
    let listElementsData
    if (doc.uid === 'blog') {
        listElementsData = await getSortedBlogData()
    } else if (doc.uid === 'episodes') {
        listElementsData = await getSortedEpisodesData()
    } else {
        listElementsData = ''
    }

    return {
        props: {
            listElementsData,
            doc,
            menu,
            preview,
        },
    }
}

export default Page
