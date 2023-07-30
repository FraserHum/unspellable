import { createClient } from "@/prismicio";
import { getThemeItem } from "@/utils/theme";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NavLinks`.
 */
export type NavLinksProps = SliceComponentProps<Content.NavLinksSlice>;

/**
 * Component for "NavLinks" Slices.
 */
const NavLinks = async ({ slice }: NavLinksProps): Promise<JSX.Element> => {
  const client = createClient();
  const theme = (await client.getSingle("theme")).data;
  const linkText = slice.primary.text ?? "default";
  const linkTheme = getThemeItem(linkText, theme)[0];
  return (
    <li
      className="grow grid place-items-center rounded-t-lg text-xl p-1"
      style={{
        color: linkTheme?.text_color ?? "red",
        backgroundColor: linkTheme?.background_color ?? "fuchsia",
      }}
    >
      <PrismicNextLink field={slice.primary.link}>
        {slice.primary.text?.toLocaleUpperCase()}
      </PrismicNextLink>
    </li>
  );
};

export default NavLinks;
