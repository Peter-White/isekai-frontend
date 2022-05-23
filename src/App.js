import React, { useEffect} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
import Home from './views/home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Isekai</h1>
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
