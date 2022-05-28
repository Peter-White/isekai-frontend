import React, { useEffect} from 'react';
import './style.css';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import meetup_logo from '../../media/img/meetup_icon_130877.png';
import discord_logo from '../../media/img/discord_101785.png';
import instagram_logo from '../../media/img/iconfinder-social-media-applications-3instagram-4102579_113804.png';
import facebook_logo from '../../media/img/facebook_icon-icons.com_53612.png';

const Home = () => {
    useEffect(() => {
        document.title = "Home Page";  
      }, []);

    return(
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Card>
            <a href='https://www.meetup.com/isekai/'><img src={meetup_logo} /></a>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <a href='discord.gg/sanantonioisekai'><img src={discord_logo} /></a>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <a href='https://instagram.com/sa_isekai?utm_medium=copy_link'><img src={instagram_logo} /></a>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <a href='https://www.facebook.com/groups/640985373710212/'><img src={facebook_logo} /></a>
          </Card>
        </Grid>
      </Grid>
    );
  }

export default Home;