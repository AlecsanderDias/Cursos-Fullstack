import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './rotas/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Favoritos from './rotas/Favoritos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div className="h-screen w-screen bg-gradient-to-r from-blue-950 to-blue-900">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/favoritos' element={<Favoritos />}/>
      </Routes>
    </div>
    </BrowserRouter>
  </React.StrictMode>
);