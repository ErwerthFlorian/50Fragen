import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/welcome";
import React, {useEffect} from "react";
import {useTheme} from "./themes/useTheme";
import {ThemeColors} from "./themes/ThemeConfig";

const body = document.body;
export const App = () => {
   const {theme} = useTheme();
   useEffect(() => {
      body.style.color = theme.color as string ?? ThemeColors.GREY;
      body.style.backgroundColor = theme.backgroundColor as string ?? ThemeColors.WHITE;
   }, [theme])

   return (
      <BrowserRouter><Routes>
         <Route path={"/"} element={<Welcome/>}/>
         <Route path={"*"} element={<Navigate to={"/"}/>}/>
      </Routes></BrowserRouter>
   );
}