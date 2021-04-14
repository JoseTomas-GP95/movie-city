import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { CardContainer } from '../Card'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import useStyles from "./css/Home";

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Container className={ classes.homeContainer } component="div" style={{ backgroundColor: '#cfe8fc' }} fixed>
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
        <CardContainer />
      </Container>
      <Footer />
    </div>
  );

}

export default Home