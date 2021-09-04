import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Date } from 'utils'
import styled from 'styled-components'

const EpisodeCardcontainer = styled.div`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #643a71;
    border-radius: 3px;
    display: flex;
    grid-template-columns: 1fr 3fr;
    background-color: #8ca19e;
    position: 'absolute';
`

const StyledA = styled.a`
    color: #afd69b;
`

const StyledImageContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    align: middle;
    border-radius: 50%;
`

const StyledImage = styled.img`
    margin: 0 auto;
`

export const EpisodeCard = ({ id, date, title, imageURL }) => (
    <EpisodeCardcontainer>
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
