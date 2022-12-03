import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "./themes/ThemeContext";
import "./styles.scss";
import {App} from "./App";
import {TranslationProvider} from "./translation/TranslationContext";
import {Provider} from "react-redux";
import {store} from "./store/store";

const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
rootElement.render(<React.StrictMode>
   <ThemeProvider>
      <TranslationProvider>
         <Provider store={store}>
            <App/>
         </Provider>
      </TranslationProvider>
   </ThemeProvider>
</React.StrictMode>);




