import React from 'react';
import ReactDOM from 'react-dom/client';
import { StoreProvider } from './store/contexts';
import App from './App';
import './index.css';
import "./fontawesome"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);

