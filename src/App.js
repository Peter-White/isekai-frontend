import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/test/:id' element={<Test />} />
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

const Test = (props) => {
  let params = useParams();
  console.log(params);
  return(<h1>Test</h1>);
}

export default App;
