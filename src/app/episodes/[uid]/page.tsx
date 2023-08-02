import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicRichText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { getThemeSection, getThemeSectionStyle } from "@/utils/theme";
import { Collapsible } from "@/components/Collapsible";

type Params = { uid: string };

export const dynamicParams = false;

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const { data } = await client
    .getByUID("episode", params.uid)
    .catch(() => notFound());
  const links = await client.getByUID("collapsible_collection", params.uid);
  const episodesTheme = await getThemeSection(client, "episodes");

  return (
    <main
      className="container rounded-b-lg p-2"
      style={getThemeSectionStyle(episodesTheme)}
    >
      <PrismicRichText field={data.title} />
      <PrismicRichText field={data.subtitle} />
      <PrismicRichText field={data.description} />
      <PrismicNextImage field={data.image} />
      <>{data.release_date}</>
      <SliceZone slices={data.slices} components={components} />
      <Collapsible summary="track list">
        <SliceZone slices={links.data.slices} components={components} />
      </Collapsible>
      <Collapsible summary="trigger warnings">
        <PrismicRichText field={data.description} />
      </Collapsible>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client.getByUID("episode", params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("episode");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
