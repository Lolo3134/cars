import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './reset.css';
import './App.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/store/ui/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);

