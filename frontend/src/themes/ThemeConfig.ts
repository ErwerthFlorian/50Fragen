export type Themes = "light" | "dark"

enum ThemeColors {
   LIGHT_GREY = "hsl(0, 0%, 85%)",
   WHITE = "hsl(0, 0%, 100%)",
   MEDIUM_GREY = "hsl(0, 0%, 75%)",
   GREY = "hsl(0, 0%, 28%)",
   DARK_GREY = "hsl(0, 0%, 20%)",
   ORANGE = "hsl(23, 100%, 50%)",
}

export type ThemeAttributes = {
   textColor: string;
   backgroundColor: string;
   hoverColor: string;
   accentColor: string;
   pageColor: string;
   borderColor: string;
}

type Theme = Record<keyof ThemeAttributes, ThemeColors>;

export const DefaultThemes: Record<Themes, Theme> = {
   light: {
      accentColor: ThemeColors.GREY,
      textColor: ThemeColors.DARK_GREY,
      hoverColor: ThemeColors.MEDIUM_GREY,
      backgroundColor: ThemeColors.LIGHT_GREY,
      borderColor: ThemeColors.DARK_GREY,
      pageColor: ThemeColors.WHITE,
   },
   dark: {
      accentColor: ThemeColors.ORANGE,
      textColor: ThemeColors.WHITE,
      hoverColor: ThemeColors.LIGHT_GREY,
      backgroundColor:ThemeColors.LIGHT_GREY,
      borderColor: ThemeColors.DARK_GREY,
      pageColor: ThemeColors.DARK_GREY,
   }
}
