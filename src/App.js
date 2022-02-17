import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const Home = () => {
  return(
    <header className="App-header">
      <h1>Welcome to Isekai</h1>
    </header>
  );
}

export default App;
