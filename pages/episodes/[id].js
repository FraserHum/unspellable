import { getAllEpisodeIds, getEpisodeData } from "../../lib/episodes";
import Layout from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export async function getStaticProps({ params }) {
  const episodeData = await getEpisodeData(params.id);
  return {
    props: {
      episodeData,
    },
  };
}
export async function getStaticPaths() {
  const paths = await getAllEpisodeIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Episode({ episodeData }) {
  console.log(episodeData);
  return (
    <Layout>
      <Head>
        <title>{episodeData[0].data.episode_title[0].text}</title>
      </Head>
      {episodeData[0].data.episode_title[0].text}
      <br />
      <Image
        priority
        src={episodeData[0].data.episode_image.url}
        className={utilStyles.borderCircle}
        height={144}
        width={144}
      />
      <br />
      {episodeData.date}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/IO9XlQrEt2Y"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Layout>
  );
}
