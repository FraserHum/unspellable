import { Collapsible } from "@/components/Collapsible";
import { EpisodeCard } from "@/components/EpisodeCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Chapter`.
 */
export type ChapterProps = SliceComponentProps<
  Omit<Content.ChapterSlice, "items"> & {
    items: {
      episode: Content.EpisodeDocument;
    }[];
  }
>;

/**
 * Component for "Chapter" Slices.
 */
const Chapter = ({ slice }: ChapterProps): JSX.Element => {
  return (
    <Collapsible summary={slice.primary.title} state="open">
      <PrismicRichText field={slice.primary.description} />
      {slice.items.map((episode) => (
        <EpisodeCard key={episode.episode.uid} episode={episode.episode} />
      ))}
    </Collapsible>
  );
};

export default Chapter;
