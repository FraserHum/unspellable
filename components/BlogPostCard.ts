import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import {Date} from 'utils'

const BlogPostCardcontainer = styled.div`
color: palevioletred;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`

export const BlogPostCard = ({ id, date, title, subject }) => (
    <BlogPostCardcontainer>
        <Link href={`/blog/${id}`}>
            {title}
        </Link>
        <br />
        <h3> {subject}</h3>
        <br />
        <small >
            <Date dateString={date} />
        </small>
    </BlogPostCardcontainer>
)
