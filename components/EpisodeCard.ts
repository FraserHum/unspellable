import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DisplayDate from 'utils';
import styled from 'styled-components';
import { CollapseableSection } from './CollapseableSection';

const EpisodeCardcontainer = styled.div`
    display: grid;
    place-content: center;
    width: 40vw;
`;

const StyledA = styled.a`
    color: #afd69b;
    cursor: pointer;
`;

const StyledEpisodeTitleDiv = styled.div`
    background-color: #90b6ab;
`;

export const EpisodeCard = ({ id, date, title, imageURL }) => {
    const [localeDate, setLocaleDate] = React.useState(null);

    useEffect(() => {
        const dateObj = new Date(date);
        const localeDate = dateObj.toISOString();
        setLocaleDate(localeDate);
    }, [date]);

    return (
        <EpisodeCardcontainer>
            <StyledEpisodeTitleDiv>
                <Link href={`/episodes/${id}`} legacyBehavior>
                    <StyledA>{title}</StyledA>
                </Link>
                <br />
                <small>
                    <DisplayDate dateString={localeDate} />
                </small>
            </StyledEpisodeTitleDiv>
            <CollapseableSection isOpen={false}>
                <div>Episode Description:</div>
                <div>TRIGGER WARNINGS</div>
                <CollapseableSection isOpen={false} />
            </CollapseableSection>
        </EpisodeCardcontainer>
    );
};
