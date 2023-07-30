import { components } from "@/slices";
import NavLinks from "@/slices/NavLinks";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicLink, PrismicText, SliceZone } from "@prismicio/react";
import { NavDocument } from "../../prismicio-types";

export const Navigation = ({ nav }: { nav: NavDocument }) => (
  <nav className="flex justify-center w-full bg-title">
    <ul className="flex container justify-stretch">
      <SliceZone slices={nav.data.slices} components={components} />
    </ul>
  </nav>
);
