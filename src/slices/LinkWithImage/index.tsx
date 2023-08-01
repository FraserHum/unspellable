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
      className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
    >
      <PrismicNextLink
        field={slice.primary.link}
        className="flex items-center space-x-4"
      >
        <div className="shrink-0">
          <PrismicNextImage field={slice.primary.image} width={75} />
        </div>
        <PrismicRichText field={slice.primary.description} />
      </PrismicNextLink>
    </section>
  );
};

export default LinkWithImage;
