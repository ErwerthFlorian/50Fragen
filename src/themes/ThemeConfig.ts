type Themes = "light" | "dark"

export interface Theme {
      color: string,
      backgroundColor: string
}

export enum ThemeColors {
   WHITE="#fafafa",
   GREY="#3f3f3f",
}

export const DefaultThemes: Record<Themes, Theme> = {
   light: {
      color: ThemeColors.GREY,
      backgroundColor: ThemeColors.WHITE
   },
   dark: {
      color: ThemeColors.WHITE,
      backgroundColor: ThemeColors.GREY
   }
}