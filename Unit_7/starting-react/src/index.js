// To reference other files/items/packages we use the kw import

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import styling to apply from CSS file
import App from './App'; // Import in a component
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Add component to the React DOM, "mounting" the MAIN app component */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
