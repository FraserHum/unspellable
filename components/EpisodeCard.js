import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { episodeListStyles } from '../styles'
import utilStyles from '../styles/utils.module.css'

export const EpisodeCard = ({ id, date, title, imageURL }) => (
    <div>
        <Image
            priority
            src={imageURL}
            className={utilStyles.borderCircle}
            height={144}
            width={144}
        />
        <div>
            <Link href={`/episodes/${id}`}>
                <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
                <Date dateString={date} />
            </small>
        </div>
    </div>
)
