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
    <Collapsible
      summary={slice.primary.title}
      state="open"
      summaryClassName="p-2 text-xl font-bold tracking-tight sm:text-2xl"
      detailsClassName="transition xl:w-11/12 w-full ease-in-out delay-150 bg-ivory open:ring open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg space-y-2"
    >
      <PrismicRichText field={slice.primary.description} />
      {slice.items.map((episode) => (
        <EpisodeCard key={episode.episode.uid} episode={episode.episode} />
      ))}
    </Collapsible>
  );
};

export default Chapter;
