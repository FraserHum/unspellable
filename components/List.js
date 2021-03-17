/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react'
import { ListStyles } from '../styles'
import utilStyles from '../styles/utils.module.css'
import { EpisodeCard } from './EpisodeCard'

export const List = ({ type, listElementsData }) => {
    let cards
    if (type === 'episodes') {
        cards = listElementsData.map(({ id, date, title, imageURL }) => (
            <li className={utilStyles.listItem} key={id}>
                <EpisodeCard
                    id={id}
                    date={date}
                    title={title}
                    imageURL={imageURL}
                />
            </li>
        ))
    } else if (type === 'blog') {
        cards = listElementsData.map(({ id, date, title, subject }) => (
            <li className={utilStyles.listItem} key={id}>
                <blogCard id={id} date={date} title={title} subject={subject} />
            </li>
        ))
    }

    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>{type}</h2>
            <ul className={utilStyles.list}>{cards}</ul>
        </section>
    )
}
