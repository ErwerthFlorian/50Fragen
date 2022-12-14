export type Themes = "light" | "dark"

enum ThemeColors {
   LIGHT_GREY = "hsl(0, 0%, 35%)",
   WHITE = "hsl(0, 100%, 100%)",
   GREY = "hsl(0, 0%, 28%)",
   DARK_GREY = "hsl(0, 0%, 20%)",
   ORANGE = "hsl(23, 100%, 50%)",
}

export type ThemeAttributes = {
   textColor: string;
   backgroundColor: string;
   accentColor: string;
   pageColor: string;
}

type Theme = Record<keyof ThemeAttributes, ThemeColors>;

export const DefaultThemes: Record<Themes, Theme> = {
   light: {
      accentColor: ThemeColors.GREY,
      textColor: ThemeColors.DARK_GREY,
      backgroundColor: ThemeColors.WHITE,
      pageColor: ThemeColors.WHITE,
   },
   dark: {
      accentColor: ThemeColors.ORANGE,
      textColor: ThemeColors.WHITE,
      backgroundColor:ThemeColors.LIGHT_GREY,
      pageColor: ThemeColors.DARK_GREY,
   }
}
