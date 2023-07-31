import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Chapter`.
 */
export type ChapterProps = SliceComponentProps<Content.ChapterSlice>;

/**
 * Component for "Chapter" Slices.
 */
const Chapter = ({ slice }: ChapterProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for chapter (variation: {slice.variation}) Slices
    </section>
  );
};

export default Chapter;
