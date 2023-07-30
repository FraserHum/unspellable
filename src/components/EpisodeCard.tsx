import { asDate } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import {
  EpisodeDocument,
  ThemeDocumentDataEpisodeCardItem,
} from "../../prismicio-types";
import { getThemeSection, getThemeSectionStyle } from "@/utils/theme";
import { createClient } from "@/prismicio";

export const EpisodeCard = async ({
  episode,
}: {
  episode: EpisodeDocument;
}) => {
  const client = createClient();
  const { title, release_date } = episode.data;
  const theme = await getThemeSection(client, "episode_card");
  return (
    <div
      className="p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4"
      style={getThemeSectionStyle(theme)}
    >
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
