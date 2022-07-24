import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Date } from 'utils'
import styled from 'styled-components'
import { CollapseableSection } from './CollapseableSection.tsx'

const EpisodeCardcontainer = styled.div`
display: grid;
place-content: center;
width: 40vw;
`

const StyledA = styled.a`
    color: #afd69b;
`


const StyledEpisodeTitleDiv = styled.div`
    background-color: #90B6AB;
`

export const EpisodeCard = ({ id, date, title}) => (
    <EpisodeCardcontainer>
        <StyledEpisodeTitleDiv>
            <Link href={`/episodes/${id}`}>
                <StyledA>{title}</StyledA>
            </Link>
            <br />
            <small>
                <Date dateString={date} />
            </small>
        </StyledEpisodeTitleDiv> 
        <CollapseableSection isOpen={false} >
            <div>
                Episode Description:
            </div>
            <div>TRIGGER WARNINGS</div>
            <CollapseableSection isOpen={false}>
            
            </CollapseableSection>
        </CollapseableSection>
    </EpisodeCardcontainer>
)
