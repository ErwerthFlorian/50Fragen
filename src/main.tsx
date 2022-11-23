import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Welcome} from "./pages/welcome";
import {ThemeProvider} from "./themes/ThemeContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <BrowserRouter>
        <ThemeProvider>
           <Routes>
              <Route path={"/"} element={<Welcome />}/>
              <Route path={"*"} element={<Navigate to={"/"} />} />
           </Routes>
        </ThemeProvider>
     </BrowserRouter>
  </React.StrictMode>
)
