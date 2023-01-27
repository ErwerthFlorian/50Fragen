import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import React from "react";
import {GameContextProvider} from "./context/GameContext";
import {CreateRoom} from "./pages/CreateRoom/CreateRoom";
import {GameRoom} from "./pages/GameRoom/GameRoom";

const body = document.body;
export const App = () => {

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