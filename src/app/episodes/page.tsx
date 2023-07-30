import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { EpisodeCard } from "@/components/EpisodeCard";
export default async function Page() {
  const client = createClient();
  const episodesPage = await client.getSingle("episodes");
  const episodes = await client.getAllByType("episode");

  return (
    <main className="bg-episodes w-full md:w-11/12">
      <div>{episodesPage.data.title}</div>
      <div>{episodesPage.data.subtitle}</div>
      <PrismicRichText field={episodesPage.data.description} />
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </main>
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
