import { createClient } from "@/prismicio"
import { getThemeSection, getThemeSectionStyle } from "@/utils/theme";
import { PrismicRichText } from "@prismicio/react";
import { Metadata } from "next";

export default async function Page() {
    const client = createClient();
    const charactersPage = await client.getSingle("characters"); 
    const episodesTheme = await getThemeSection(client, "characters");

  return ( 
    <main className="container flex-col justify-center items-center rounded-b-lg"
      style={getThemeSectionStyle(episodesTheme)}
      >
    <div>{charactersPage.data.title}</div>
    <div>{charactersPage.data.subtitle}</div>
    <PrismicRichText field={charactersPage.data.description} />

  </main>)
}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient();
    const page = await client.getSingle("characters");
  
    return {
      title: page.data.meta_title,
      description: page.data.meta_description,
    };
  }