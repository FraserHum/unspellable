import { asDate } from "@prismicio/client";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import {
  EpisodeDocument,
  ThemeDocumentDataEpisodeCardItem,
} from "../../prismicio-types";
import { getThemeSection, getThemeSectionStyle } from "@/utils/theme";
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import { CrystalBall } from "./CrystalBall";

export const EpisodeCard = async ({
  episode,
}: {
  episode: EpisodeDocument;
}) => {
  const client = createClient();
  const { title, release_date, image } = episode.data;
  const theme = await getThemeSection(client, "episode_card");
  return (
    <div
      className="p-6 mx-auto rounded-xl shadow-lg flex items-center justify-start space-x-4 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 hover:drop-shadow-md duration-300"
      style={getThemeSectionStyle(theme)}
    >
      {/* <div className="z-10 rounded-full top-0.5 left-2.5 absolute m-0 overflow-hidden h-40 w-40 flex transition blur-sm hover:blur-none">
        <PrismicImage field={image} />
      </div> */}
      <CrystalBall img={image} className="w-50" />

      <Link href={`/episodes/${episode.uid}`}>
        <PrismicRichText field={title} />
      </Link>
      {release_date && (
        <small>
          <time dateTime={asDate(release_date).toISOString()}>
            {asDate(release_date).toLocaleString()}
          </time>
        </small>
      )}
    </div>
  );
};
