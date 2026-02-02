/* src/main.jsx
   Entry point for the Vite + React application.
   The new buttonStyles.css is imported here so the rule is applied globally.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';          // existing global styles
import './buttonStyles.css';   // <-- NEW: global button styling

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);