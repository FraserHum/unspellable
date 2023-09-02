import { Metadata } from "next";
import { PrismicRichText } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { getThemeSection, getThemeSectionStyle } from "@/utils/theme";

export default async function Page() {
  const client = createClient();
  const aboutPage = await client.getSingle("about");
  const episodesTheme = await getThemeSection(client, "about");

  return (
    <main
      className="container flex-col justify-center items-center rounded-b-lg"
      style={getThemeSectionStyle(episodesTheme)}
    >
      <div>{aboutPage.data.title}</div>
      <div>{aboutPage.data.subtitle}</div>
      <PrismicRichText field={aboutPage.data.description} />
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
