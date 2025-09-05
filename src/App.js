import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Logins/Login';
import LoginMaestros from './Logins/LoginMaestros';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login-maestros" element={<LoginMaestros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
