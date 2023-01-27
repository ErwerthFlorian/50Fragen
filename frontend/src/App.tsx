import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import React from "react";
import {GameContextProvider} from "./context/GameContext";
import {GameRoom} from "./pages/GameRoom/GameRoom";
import {ChooseCategory} from "./pages/ChooseCategory/ChooseCategory";
import {ChooseTopic} from "./pages/ChooseTopic/ChooseTopic";

const body = document.body;
export const App = () => {

   return (
      <GameContextProvider>
         <BrowserRouter>
            <Routes>
               <Route path={Paths.HOME} element={<Home/>}/>
               <Route path={Paths.CHOOSE_TOPIC} element={<ChooseTopic/>}/>
               <Route path={Paths.CHOOSE_CATEGORY} element={<ChooseCategory/>}/>
               <Route path={Paths.GAME_ROOM} element={<GameRoom/>}/>
               <Route path={Paths.FALLBACK} element={<Navigate to={Paths.HOME}/>}/>
            </Routes>
         </BrowserRouter>
      </GameContextProvider>
   );
}

export const Paths = {
   HOME: "/",
   GAME_ROOM: `/gameroom`,
   CHOOSE_TOPIC: "/topic",
   CHOOSE_CATEGORY: "/category",
   FALLBACK: "*",
}

export type Paths = keyof typeof Paths;