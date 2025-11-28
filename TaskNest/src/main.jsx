import React from 'react';
import { createRoot } from 'react-dom/client';
import AppWithProviders from './App.jsx';
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithProviders />
  </React.StrictMode>
);
