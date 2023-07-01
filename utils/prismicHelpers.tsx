import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import Link from 'next/link'
import {
    apiEndpoint,
    accessToken,
    linkResolver,
    hrefResolver,
} from '../prismic-configuration'
import React from 'react'

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
    <Link
        key={element.data.id}
        href={hrefResolver(element.data)}
        as={linkResolver(element.data)}
    >
        <a>{content}</a>
    </Link>
)
const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken
        ? { accessToken: prismicAccessToken }
        : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}
// Client method to query documents from the Prismic repo
const client = (req = null) => prismic.createClient(apiEndpoint, createClientOptions(req, accessToken ? accessToken : null));

export default client();
