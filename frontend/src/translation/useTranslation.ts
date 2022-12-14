import {useCallback, useContext} from "react";
import {TranslatedComponents, Translations} from "./TranslationConfig";
import {TranslationContext} from "./TranslationContext";

export const useTranslationData = () => {
   const {language, setLanguage} = useContext(TranslationContext);

   const toggleLanguage = useCallback(() => {
      setLanguage?.(currentLanguage => currentLanguage === "de" ? "en" : "de");
   }, [language])

   return {language, toggleLanguage}
}

export const useTranslation = (component?: TranslatedComponents) => {
   const {language} = useContext(TranslationContext);
   return Translations[component ?? "Empty"][language];
}