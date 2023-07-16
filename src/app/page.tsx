import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Navigation } from "@/components/Navigation";
import { EpisodeCard } from "@/components/EpisodeCard";
import { filter } from "@prismicio/client";
import { EpisodeDocument, EpisodesDocument } from "../../prismicio-types";

export default async function Page() {
  const client = createClient();
  const home = await client.getSingle("home");
  const nav = await client.getSingle("nav");
  const mostRecent = await client.getFirst<EpisodeDocument>({
    filters: [filter.at("document.type", "episode")],
    orderings: {
      field: "document.first_publication_date",
      direction: "asc",
    },
  });

  return (
    <>
      <EpisodeCard episode={mostRecent}></EpisodeCard>
      <SliceZone slices={home.data.slices} components={components} />
    </>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("home");

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}