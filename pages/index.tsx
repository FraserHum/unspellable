import React from 'react';
import {
  Header,
  Container,
  EpisodeCard,
  SliceZone,
} from '../components';
import DefaultLayout from '../layouts';
import client from '../utils/prismicHelpers';
import { getLatestEpisodeData } from '../lib/episodes';

export async function getStaticProps({ preview = null, previewData = { ref: undefined } }) {
  const { ref } = previewData;

  const doc = (await client.getSingle('home')) || {};
  const menu = (await client.getSingle('menu')) || {};
  const theme = (await client.getSingle('theme')) || {};
  const episodeData = (await getLatestEpisodeData()) || {};

  return {
    props: {
      doc,
      menu,
      episodeData,
      preview,
      theme,
    },
  };
}

export default function Home({
  doc, menu, episodeData, theme,
}) {
  return (
    <DefaultLayout>
      <Header menu={menu} pageData={doc.data} theme={theme} />
      <EpisodeCard
        id={episodeData.id}
        date={episodeData.date}
        title={episodeData.title}
        imageURL={episodeData.imageURL}
      />
      <Container>
        <SliceZone sliceZone={doc.data.page_content} />
      </Container>
    </DefaultLayout>
  );
}
