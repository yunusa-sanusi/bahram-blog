import React from 'react';
import ReactDOM from 'react-dom/client';

import { FormViewProvider } from './contexts/FormViewContext';
import { UserProvider } from './contexts/UserContext';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FormViewProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </FormViewProvider>
  </React.StrictMode>,
);
