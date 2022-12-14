import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {css} from "@emotion/css";
import {DefaultThemes} from "./ThemeConfig";

export const useCurrentTheme = () => {
   const {theme, setTheme} = useContext(ThemeContext);
   return {theme, setTheme};
}

export const useThemeWithCss = () => {
   const {theme, setTheme} = useCurrentTheme();
   const Theme = DefaultThemes[theme];

   const themeClasses = css({
      color: Theme.textColor,
      backgroundColor: Theme.backgroundColor,
      borderColor: Theme.accentColor,
      outlineColor: Theme.accentColor,
      ":hover": {
         color: Theme.accentColor,
         borderColor: Theme.textColor,
         outlineColor: Theme.textColor,
      }
   })

   return {themeClasses, setTheme}
}

export const useTheme = () => {
   const {theme} = useCurrentTheme();
   return DefaultThemes[theme];
}

