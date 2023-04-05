import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path = '*' element = {<NotFound/>}/>
      <Route index element = {<App/>} path='/*'/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

reportWebVitals();
