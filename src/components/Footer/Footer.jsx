import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";

import useStyles from "./css/Footer";

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar className={classes.footerContainer}>
          <Typography>
            <a
              className={classes.link}
              href="https://www.linkedin.com/in/josetgp/"
            >
              © José Tomas González 2021
            </a>
          </Typography>
          <Typography variant="body1" color="inherit">
            Hecho con 💛💙❤️
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
