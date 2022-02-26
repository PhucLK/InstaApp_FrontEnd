import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import StoreProvider from './store/store';
import './index.css'
import ThemeOptions from './ThemeOptions'
ReactDOM.render(
  <React.StrictMode>
    <ThemeOptions>
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </ThemeOptions>
  </React.StrictMode>,
  document.getElementById('root')
);
