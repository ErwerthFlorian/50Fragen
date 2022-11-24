import React from 'react'
import ReactDOM from 'react-dom/client'
import {ThemeProvider} from "./themes/ThemeContext";
import "./styles.scss";
import {App} from "./App";

const rootElement = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
rootElement.render(<React.StrictMode>

      <ThemeProvider>
         <App />
      </ThemeProvider>
</React.StrictMode>);

