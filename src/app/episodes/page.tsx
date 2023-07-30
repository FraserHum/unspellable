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
      className="container rounded-b-lg"
      style={getThemeSectionStyle(episodesTheme)}
    >
      <div className="h-screen">{episodesPage.data.title}</div>
      <div className="h-screen">{episodesPage.data.subtitle}</div>
      <div className="h-screen">
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
