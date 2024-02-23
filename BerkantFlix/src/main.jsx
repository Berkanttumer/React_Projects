import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import PopularProvider from './context/popular.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <PopularProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PopularProvider>
  </AuthContextProvider>
);
