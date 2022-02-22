import React, { useEffect} from 'react';
import './style.css';

const Home = () => {
    useEffect(() => {
        document.title = "Home Page";  
      }, []);

    return(
      <header className="App-header">
        <h1>Welcome to Isekai</h1>
      </header>
    );
  }

export default Home;