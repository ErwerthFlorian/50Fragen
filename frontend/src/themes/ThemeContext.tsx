import {createContext, Dispatch, SetStateAction, useState} from "react";
import {Themes} from "./ThemeConfig";
import {WithChildren} from "../types";

interface ThemeContextProps {
   theme: Themes,
   setTheme?: Dispatch<SetStateAction<Themes>>
}

export const ThemeContext = createContext<ThemeContextProps>({theme: "light" });

export const ThemeProvider = ({children}: WithChildren) => {
   const [theme, setTheme] = useState<Themes>("light");
   return (<ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>);
}