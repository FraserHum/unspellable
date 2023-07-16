import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavLinks`.
 */
export type NavLinksProps = SliceComponentProps<Content.NavLinksSlice>;

/**
 * Component for "NavLinks" Slices.
 */
const NavLinks = ({ slice }: NavLinksProps): JSX.Element => {
  const text = slice.primary.text;
  if (text)
    switch (slice.primary.text) {
    }
  return (
    <li className="bg-characters grow">
      <PrismicNextLink field={slice.primary.link}>
        {slice.primary.text?.toLocaleUpperCase()}
      </PrismicNextLink>
    </li>
  );
};

export default NavLinks;
