import { components } from "@/slices";
import NavLinks from "@/slices/NavLinks";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";

export const Navigation = ({ nav }) => (
  <nav className="flex justify-center w-full bg-title">
    <ul className="flex w-full md:w-11/12 justify-stretch">
      <SliceZone slices={nav.data.slices} components={components} />
    </ul>
  </nav>
);
