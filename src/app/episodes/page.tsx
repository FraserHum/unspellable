import { Metadata } from "next";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { EpisodeCard } from "@/components/EpisodeCard";
import { getThemeSection, getThemeSectionStyle } from "@/utils/theme";
export default async function Page() {
  const client = createClient();
  const episodesPage = await client.getSingle("episodes");
  const episodes = await client.getAllByType("episode");
  const episodesTheme = await getThemeSection(client, "episodes");

  return (
    <main
      className="container rounded-b-lg p-2"
      style={getThemeSectionStyle(episodesTheme)}
    >
      <h1 className="p-2 mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        {episodesPage.data.title}
      </h1>
      <h2 className="p-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {episodesPage.data.subtitle}
      </h2>
      <div className="p-2">
        <PrismicRichText field={episodesPage.data.description} />
      </div>

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
