import {createContext, Dispatch, SetStateAction, useState} from "react";
import {DefaultThemes, Theme} from "./ThemeConfig";
import {WithChildren} from "../types";

interface ThemeContextProps {
   theme: Theme,
   setTheme?: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextProps>({theme: DefaultThemes.light });

export const ThemeProvider = ({children}: WithChildren) => {
   const [theme, setTheme] = useState<Theme>(DefaultThemes.light);
   return (<ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>);
}