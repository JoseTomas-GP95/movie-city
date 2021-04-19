import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

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
      <Container  component="div" style={{ backgroundColor: '#cfe8fc' }} fixed>
        <CardContainer />
      </Container>
      <Footer />
    </div>
  );

}

export default Home