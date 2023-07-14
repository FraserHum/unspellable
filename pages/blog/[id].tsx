import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from 'layouts';
import React from 'react';
import { getAllBlogIds, getBlogData } from '../../lib/blog';
import { SliceZone } from '../../components/slices';
// import utilStyles from '../../styles/utils.module.css'

export async function getStaticProps({ params }) {
  const episodeData = await getBlogData(params.id);
  return {
    props: {
      episodeData,
    },
  };
}
export async function getStaticPaths() {
  const paths = await getAllBlogIds();
  return {
    paths,
    fallback: false,
  };
}

export default function BlogPost({ blogPostData }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{blogPostData[0].data.title[0].text}</title>
      </Head>
      {blogPostData[0].data.title[0].text}
      <br />
      {blogPostData.date}
      <br />
      <SliceZone sliceZone={blogPostData.data.page_content} />
    </DefaultLayout>
  );
}
