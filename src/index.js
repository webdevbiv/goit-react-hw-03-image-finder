import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import 'modern-normalize';
import 'styles/index';
import 'styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
