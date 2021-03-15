import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedEpisodesData } from '../lib/episodes';

export async function getStaticProps() {
  const allEpisodesData = await getSortedEpisodesData();
  console.log(allEpisodesData);
  return {
    props: {
      allEpisodesData,
    },
  };
}

export default function Home({ allEpisodesData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Episodes</h2>
        <ul className={utilStyles.list}>
          {allEpisodesData.map(({ id, date, title, imageURL }) => (
            <li className={utilStyles.listItem} key={id}>
              <Image
                priority
                src={imageURL}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
              />
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
