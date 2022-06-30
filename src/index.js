import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './zadatak.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Matura from './Matura';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="matura" element={<Matura />} />

    </Routes>
  </BrowserRouter>
);

