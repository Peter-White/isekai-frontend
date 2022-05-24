import React, { useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Home from './views/home';
import logo from './media/img/Isekai.png';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} />
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
