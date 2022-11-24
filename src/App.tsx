import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/welcome";
import React, {useEffect} from "react";
import {useTheme} from "./themes/useTheme";

const body = document.body;
export const App = () => {
   const {theme} = useTheme();

   useEffect(() => {
      body.style.color = theme.color;
      body.style.backgroundColor = theme.backgroundColor;
   }, [theme])

   return (
      <BrowserRouter><Routes>
         <Route path={"/"} element={<Welcome/>}/>
         <Route path={"*"} element={<Navigate to={"/"}/>}/>
      </Routes></BrowserRouter>
   );
}