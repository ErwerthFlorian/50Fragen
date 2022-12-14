import styles from "./styles";
import {getClasses} from "../types";
import {useTranslation, useTranslationData} from "../../../translation/useTranslation";
import {Toggle} from "../Toggle/Toggle";
import {useCurrentTheme} from "../../../themes/useCurrentTheme";
import {useCallback} from "react";

const headerClasses = getClasses(styles);

export const Header = () =>{
   return <div className={headerClasses.header}>
      <LanguageToggle />
      <ThemeToggle />
   </div>
}

const LanguageToggle = () => {

   const {toggleLanguage} = useTranslationData();
   const translation = useTranslation("LanguageToggle");

   return <Toggle leftValue={"DE"} rightValue={"EN"} onClick={toggleLanguage}>{translation}</Toggle>
}

const ThemeToggle = () => {

   const {setTheme} = useCurrentTheme();
   const translation = useTranslation("LanguageToggle");
   const toggleTheme = useCallback(() => setTheme?.(currentTheme => currentTheme === "light"?"dark" : "light"), []);
   return <Toggle leftValue={"LIGHT"} rightValue={"DARK"} onClick={toggleTheme}>{translation}</Toggle>
}
