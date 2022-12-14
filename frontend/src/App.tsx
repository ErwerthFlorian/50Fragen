import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/Welcome";
import React, {useEffect} from "react";
import {useTheme} from "./themes/useCurrentTheme";
import {CreateRoom} from "./pages/CreateRoom";

const body = document.body;
export const App = () => {
   const theme = useTheme();
   useEffect(() => {
      body.style.color = theme.textColor;
      body.style.backgroundColor = theme.pageColor;
   }, [theme])

   return (
      <BrowserRouter>
         <Routes>
            <Route path={"/"} element={<Welcome/>}/>
            <Route path={"/create-room"} element={<CreateRoom />} />
            <Route path={"*"} element={<Navigate to={"/"}/>}/>
         </Routes>
      </BrowserRouter>
   );
}