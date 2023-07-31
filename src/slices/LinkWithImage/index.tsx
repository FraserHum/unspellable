import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LinkWithImage`.
 */
export type LinkWithImageProps =
  SliceComponentProps<Content.LinkWithImageSlice>;

/**
 * Component for "LinkWithImage" Slices.
 */
const LinkWithImage = ({ slice }: LinkWithImageProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.link}>
        <PrismicNextImage field={slice.primary.image} />
        <PrismicRichText field={slice.primary.description} />
      </PrismicNextLink>
    </section>
  );
};

export default LinkWithImage;
