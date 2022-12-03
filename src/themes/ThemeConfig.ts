import {CSSObject} from "@emotion/react";

export type Themes = "light" | "dark"

export const ThemeColors = {
   LIGHT_GREY: "hsl(0, 0%, 35%)",
   WHITE:"hsl(0, 100%, 100%)",
   GREY:"hsl(0, 0%, 28%)",
   DARK_GREY: "hsl(0, 0%, 20%)"
}

const ThemedComponents = {
   Header: "Header",
   Default: "Default",
   Paragraph: "Paragraph",
   Button: "Button",
   RoomButton: "RoomButton",
   Form: "Form",
   Avatar: "Avatar",
   DefaultAvatar: "DefaultAvatar",
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
   DefaultAvatar: {
      light: {
         fill: "black",
      },
      dark: {
         fill: "white",
      }
   },
   Avatar: {
      light: {
         borderColor: ThemeColors.DARK_GREY,
         backgroundColor: ThemeColors.WHITE,
      },
      dark: {
         borderColor: ThemeColors.WHITE,
         backgroundColor: ThemeColors.DARK_GREY,
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
   RoomButton: {
      light: {
         backgroundColor: ThemeColors.LIGHT_GREY,
         color: ThemeColors.WHITE,
         "::after": {
            backgroundColor: "black",
         },
         ":hover":{
            backgroundColor: ThemeColors.GREY,
         }
      },
      dark: {
         backgroundColor: ThemeColors.DARK_GREY,
         "::after": {
            backgroundColor: "black",
         },
         ":hover":{
            backgroundColor: ThemeColors.LIGHT_GREY,
         }
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
