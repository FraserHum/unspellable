import { ThemeDocumentData } from "../../prismicio-types";

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

export const getThemeItem = (section: string, theme: ThemeDocumentData) => {
  if (theme.hasOwnProperty(section)) {
    return theme[section as keyof ThemeDocumentData];
  } else {
    return theme["default"];
  }
};
