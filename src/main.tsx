import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext.tsx';

import './styles/reset.scss';
import './styles/typography.scss';
import './styles/utils.scss';
import './styles/theme.scss';
import './styles/breakpoimts.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
