import {useContext} from "react";
import {TranslatedComponents, Translations} from "./TranslationConfig";
import {TranslationContext} from "./TranslationContext";

export const useTranslationSetter = () => {
   const {setLanguage} = useContext(TranslationContext);
   return {setLanguage}
}

export const useTranslation = (component?: TranslatedComponents) => {
   const {language} = useContext(TranslationContext);
   return Translations[component ?? "Empty"][language];
}