import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { CardContainer } from '../Card'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

import useStyles from "./css/Home";

const Home = (props) => {
  const classes = useStyles();
  const [ mysearch, setMySearch ] = useState('')

  return (
    <div>
      <Navbar 
        setMySearch={ setMySearch }
      />
      {/* <CssBaseline /> */}
      <Container  component="div" fixed>
        <CardContainer 
          mysearch={ mysearch }
        />
      </Container>
      <Footer />
    </div>
  );

}

export default Home