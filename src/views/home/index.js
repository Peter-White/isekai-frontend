import React, { useEffect} from 'react';
import './style.css';

const Home = () => {
    useEffect(() => {
        document.title = "Home Page";  
      }, []);

    return(
        <ul>
          <li><a href='https://www.meetup.com/isekai/'>Meetup</a></li>
          <li><a href='discord.gg/sanantonioisekai'>Discord</a></li>
          <li><a href='https://instagram.com/sa_isekai?utm_medium=copy_link'>Instagram</a></li>
          <li><a href='https://www.facebook.com/groups/640985373710212/'>Facebook</a></li>
        </ul>
    );
  }

export default Home;