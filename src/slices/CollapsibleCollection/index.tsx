import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CollapsibleCollection`.
 */
export type CollapsibleCollectionProps =
  SliceComponentProps<Content.CollapsibleCollectionSlice>;

/**
 * Component for "CollapsibleCollection" Slices.
 */
const CollapsibleCollection = ({
  slice,
}: CollapsibleCollectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for collapsible_collection (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CollapsibleCollection;
