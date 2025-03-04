import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AppHashRouter } from './router/AppHashRouter';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='main_body'>
      <AppHashRouter />
    </div>
  </React.StrictMode>
);
