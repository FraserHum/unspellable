import { Client, ColorField, Content } from "@prismicio/client";
import { ThemeDocumentData } from "../../prismicio-types";
import { createClient } from "@/prismicio";

export const defaultTheme: ThemeDocumentData = {
  default: [
    {
      text_color: "#FFFCE7",
      background_color: "#3B5D4E",
    },
  ],
  characters: [
    {
      text_color: "#FFFCE7",
      background_color: "#3B5D4E",
    },
  ],
  about: [
    {
      text_color: "#FFFCE7",
      background_color: "#3B5D4E",
    },
  ],
  episodes: [
    {
      text_color: "#FFFCE7",
      background_color: "#3B5D4E",
    },
  ],
};

export const getSectionFromTheme = (
  section: string,
  theme: ThemeDocumentData
) => {
  if (theme.hasOwnProperty(section)) {
    return theme[section as keyof ThemeDocumentData];
  } else {
    return theme["default"];
  }
};

export const getThemeSection = async (
  client: Client<Content.AllDocumentTypes>,
  section: string
) => {
  const themeData = (await client.getSingle("theme")).data;
  return getSectionFromTheme(section, themeData)[0];
};

export const getThemeSectionStyle = (
  sectionTheme:
    | {
        text_color: ColorField;
        background_color: ColorField;
      }
    | undefined
) => ({
  color: sectionTheme?.text_color ?? "red",
  backgroundColor: sectionTheme?.background_color ?? "fuchsia",
});
