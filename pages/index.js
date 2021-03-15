import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Date from "../components/date";
import Link from "next/link";

import { getSortedEpisodesData } from "../lib/episodes";

export async function getStaticProps() {
  const allEpisodesData = await getSortedEpisodesData();
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
        <p>
          Welcome to the home of our D&D podcast! Here you will find all our
          episodes as well as aditional content about us and the world we play
          in
        </p>
        <p>
          This podcast is intended for mature audicences, check episode notes
          for trigger warnings
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
              <div>
                <Link href={`/episodes/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
