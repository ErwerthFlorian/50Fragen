import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { ChooseQuestionSet } from "./pages/ChooseQuestionSet/ChooseQuestionSet";
import { PlayPage } from "./pages/PlayPage/PlayPage";
import { About } from "./pages/About/About";
import { GeneralTopic } from "./pages/GeneralTopic/GeneralTopic";
import { io, Socket } from "socket.io-client";
import { IncommingMessages, OutgoingMessages } from "../../backend";
import { PlayPagePreroom } from "./pages/PlayPagePreroom/PlayPagePreroom.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

export const socket: Socket<OutgoingMessages, IncommingMessages> = io(`http://localhost:5121`, { autoConnect: true, forceNew: false });

const App = () => {
    return (
        <Routes>
            <Route element={<MainPage />} path={"/"}></Route>
            <Route element={<GeneralTopic />} path={"/generalTopic"} />
            <Route element={<ChooseQuestionSet />} path={"/questionSet"}></Route>
            <Route element={<PlayPagePreroom />} path={"/preroom/:id"}></Route>
            <Route path={"/play/:id"} element={<PlayPage />}></Route>
            <Route element={<About />} path={"/about"}></Route>
        </Routes>
    );
};

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <div className="body">
                    <App />
                </div>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
