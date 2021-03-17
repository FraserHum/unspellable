import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { episodeListStyles } from '../styles'
import utilStyles from '../styles/utils.module.css'

export const BlogPostCard = ({ id, date, title, subject }) => (
    <div>
        <Link href={`/blog/${id}`}>
            <a>{title}</a>
        </Link>
        <br />
        <h3> {subject}</h3>
        <br />
        <small className={utilStyles.lightText}>
            <Date dateString={date} />
        </small>
    </div>
)
