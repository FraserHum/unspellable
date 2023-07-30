import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { Navigation } from "@/components/Navigation";
import { EpisodeCard } from "@/components/EpisodeCard";
import { filter } from "@prismicio/client";
import { EpisodeDocument, EpisodesDocument } from "../../prismicio-types";
import { getThemeItem } from "@/utils/theme";

export default async function Page() {
  const client = createClient();
  const home = await client.getSingle("home");
  const mostRecent = await client.getFirst<EpisodeDocument>({
    filters: [filter.at("document.type", "episode")],
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });
  const theme = (await client.getSingle("theme")).data;
  const linkTheme = getThemeItem("home", theme)[0];

  return (
    <main
      className="container flex-col justify-center items-center"
      style={{
        color: linkTheme?.text_color ?? "red",
        backgroundColor: linkTheme?.background_color ?? "fuchsia",
      }}
    >
      <EpisodeCard episode={mostRecent}></EpisodeCard>
      <SliceZone slices={home.data.slices} components={components} />
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
