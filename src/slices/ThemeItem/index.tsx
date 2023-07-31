import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThemeItem`.
 */
export type ThemeItemProps = SliceComponentProps<Content.ThemeItemSlice>;

/**
 * Component for "ThemeItem" Slices.
 */
const ThemeItem = ({ slice }: ThemeItemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for theme_item (variation: {slice.variation}) Slices
    </section>
  );
};

export default ThemeItem;
