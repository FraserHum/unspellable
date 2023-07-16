import { asDate } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { EpisodeDocument } from "../../prismicio-types";

export const EpisodeCard = ({ episode }: { episode: EpisodeDocument }) => {
  const { title, release_date } = episode.data;
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
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
