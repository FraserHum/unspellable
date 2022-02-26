import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Date } from '../utils'
import styled from 'styled-components'

const EpisodeCardcontainer = styled.div`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #643a71;
    border-radius: 3px;
    grid-template-columns: 1fr 3fr;
    display: flex;
    background-color: #8ca19e;
    min-width: 250px;
`

const StyledA = styled.a`
    color: #afd69b;
`

const StyledImageContainer = styled.div`
    max-height: 150px;
    max-width: 150px;
    overflow: hidden;
    align: middle;
    border-radius: 50%;
`

const StyledImage = styled.img`
    height: max(18vh, 12rem);
    object-fit: cover;
    width: 100%;
    @supports (aspect-ratio: 1) {
        aspect-ratio: var(--img-ratio);
        height: auto;
    }
`

export const EpisodeCard = ({ id, date, title, imageURL, className }) => (
    <EpisodeCardcontainer className={className}>
        <StyledImageContainer>
            <StyledImage src={imageURL} />
        </StyledImageContainer>
        <div>
            <Link href={`/episodes/${id}`}>
                <StyledA>{title}</StyledA>
            </Link>
            <br />
            <small>
                <Date dateString={date} />
            </small>
        </div>
    </EpisodeCardcontainer>
)
