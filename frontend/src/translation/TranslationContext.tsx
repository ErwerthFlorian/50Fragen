import {createContext, Dispatch, SetStateAction, useState} from "react";
import {WithChildren} from "../types";
import {Languages} from "./TranslationConfig";

interface TranslationContext {
   language: Languages,
   setLanguage?: Dispatch<SetStateAction<Languages>>
}

export const TranslationContext = createContext<TranslationContext>({language: "de"});

export const TranslationProvider = ({children}: WithChildren) => {
   const [language, setLanguage] = useState<Languages>("de");
   return (<TranslationContext.Provider value={{language, setLanguage}}>{children}</TranslationContext.Provider>);
}