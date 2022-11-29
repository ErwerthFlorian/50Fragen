import {CSSObject} from "@emotion/react";

export type Themes = "light" | "dark"

export const ThemeColors = {
   WHITE:"#fafafa",
   GREY:"#3f3f3f",
   DARK_GREY: "#1c1c1c"
}

const ThemedComponents = {
   Header: "Header",
   Default: "Default",
   Paragraph: "Paragraph",
}

export type Theme = Record<Themes, CSSObject>;

export type ThemedComponents = keyof typeof ThemedComponents;

export const DefaultThemes: Record<ThemedComponents, Theme> = {
   Header: {
      light: {
         color: ThemeColors.DARK_GREY,
         backgroundColor: "WHITE",
      },
      dark: {
         color: "WHITE",
         backgroundColor: "GREY"
      }
   },
   Paragraph: {
      light:{
         color: ThemeColors.GREY,
         backgroundColor: ThemeColors.WHITE
      },
      dark: {
         color: ThemeColors.WHITE,
         backgroundColor: ThemeColors.DARK_GREY
      },
   },
   Default: {
      light: {
            color: "GREY",
            backgroundColor: "WHITE",
      },
      dark: {
         color: "WHITE",
         backgroundColor: "GREY"
      }
   }
}
