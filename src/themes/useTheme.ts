import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import {css} from "@emotion/css";

export const useTheme = () => {
   const {theme, setTheme} = useContext(ThemeContext);
   return {theme, setTheme};
}

export const useThemeWithCss = () => {
   const {theme, setTheme} = useContext(ThemeContext);
   return {theme: css({...theme}), setTheme}
}

