import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import React, {useEffect} from "react";
import {useTheme} from "./themes/useCurrentTheme";
import {CreateRoom} from "./pages/CreateRoom";
import {GameRoom} from "./pages/GameRoom";
import {GameContextProvider} from "./context/GameContext";

const body = document.body;
export const App = () => {
   const theme = useTheme();
   useEffect(() => {
      body.style.color = theme.textColor;
      body.style.backgroundColor = theme.pageColor;
   }, [theme])

   return (
      <GameContextProvider>
         <BrowserRouter>
            <Routes>
               <Route path={Paths.HOME} element={<Home/>}/>
               <Route path={Paths.CREATEROOM} element={<CreateRoom />} />
               <Route path={Paths.GAMEROOM} element={<GameRoom />} />
               <Route path={Paths.FALLBACK} element={<Navigate to={Paths.HOME}/>}/>
            </Routes>
         </BrowserRouter>
      </GameContextProvider>
   );
}

export const Paths = {
   HOME: "/",
   CREATEROOM: "/create-room",
   GAMEROOM: "/game-room",
   FALLBACK: "*",
}

export type Paths = keyof typeof Paths;