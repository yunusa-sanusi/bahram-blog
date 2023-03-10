import React from 'react';
import ReactDOM from 'react-dom/client';

import { FormViewProvider } from './contexts/FormViewContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FormViewProvider>
      <App />
    </FormViewProvider>
  </React.StrictMode>,
);
