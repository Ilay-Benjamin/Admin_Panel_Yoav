import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {appConfig} from './config/app/app.config.js';
import {globalConfig} from './config/global/global.config.js';

console.log("App Config:", appConfig);
console.log("Global Config:", globalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
