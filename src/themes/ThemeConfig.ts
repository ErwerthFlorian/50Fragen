import {CSSObject} from "@emotion/react";

export type Themes = "light" | "dark"

export const ThemeColors = {
   LIGHT_GREY: "#e5e5e5",
   WHITE:"#fefefe",
   GREY:"#3f3f3f",
   DARK_GREY: "#1c1c1c"
}

const ThemedComponents = {
   Header: "Header",
   Default: "Default",
   Paragraph: "Paragraph",
   Button: "Button",
   Form: "Form",
}

export type Theme = Record<Themes, CSSObject>;

export type ThemedComponents = keyof typeof ThemedComponents;


export const DefaultThemes: Record<ThemedComponents, Theme> = {
   Header: {
      light: {
      },
      dark: {
      }
   },
   Form: {
      light: {
         backgroundColor: ThemeColors.LIGHT_GREY,
      },
      dark: {
         backgroundColor: ThemeColors.DARK_GREY
      }
   },
   Button: {
      light: {
         outline: `3px solid ${ThemeColors.DARK_GREY}`
      },
      dark: {
         outline: `1px solid ${ThemeColors.WHITE}`
      }
   },
   Paragraph: {
      light:{
      },
      dark: {
      },
   },
   Default: {
      light: {
            color: ThemeColors.GREY,
            backgroundColor: ThemeColors.WHITE,
      },
      dark: {
         color: ThemeColors.WHITE,
         backgroundColor: ThemeColors.GREY
      }
   }
}
