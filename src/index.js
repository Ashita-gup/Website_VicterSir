import React from 'react';
import { HashRouter as Router } from 'react-router-dom'; // ✅ Import HashRouter
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* ✅ Replace BrowserRouter with HashRouter */}
      <App />
    </Router>
  </React.StrictMode>
);

// Optional: log web vitals
reportWebVitals();
