/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import styled from 'styled-components';
import { EpisodeCard } from './EpisodeCard';
import { BlogPostCard } from './BlogPostCard';

const StyledList = styled.ul`
list-style: none;
width: 50vw;
`;

export function List({ type, listElementsData }) {
  let cards;
  if (type === 'episodes') {
    cards = listElementsData.map(({
      id, date, title, imageURL,
    }) => (
      <li key={id}>
        <EpisodeCard
          id={id}
          date={date}
          title={title}
          imageURL={imageURL}
        />
      </li>
    ));
  } else if (type === 'blog') {
    cards = listElementsData.map(({
      id, date, title, subject,
    }) => (
      <li key={id}>
        <BlogPostCard id={id} date={date} title={title} subject={subject} />
      </li>
    ));
  }

  return (
    <section>
      <h2>{type}</h2>
      <StyledList>{cards}</StyledList>
    </section>
  );
}
