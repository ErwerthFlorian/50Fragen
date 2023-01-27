import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "./themes/ThemeContext";
import "./styles.scss";
import {App} from "./App";
import {TranslationProvider} from "./translation/TranslationContext";
import {Header} from "./components/Header/Header";

const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
rootElement.render(<React.StrictMode>
   <ThemeProvider>
      <TranslationProvider>
         <Header/>
         <App/>
      </TranslationProvider>
   </ThemeProvider>
</React.StrictMode>);




