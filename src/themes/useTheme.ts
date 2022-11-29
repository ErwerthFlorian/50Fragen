import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {DefaultThemes, ThemedComponents, Themes} from "./ThemeConfig";
import {css} from "@emotion/css";

export const useTheme = (component?: ThemedComponents) => {
   const {theme, setTheme} = useContext(ThemeContext);
   return {theme: DefaultThemes[component ?? "Default"][theme], setTheme};
}

export const useThemeWithCss = (component?: ThemedComponents) => {
   const {theme, setTheme} = useContext(ThemeContext);
   return {theme: css(theme)}
}

