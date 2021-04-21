import React from "react";

import Container from "@material-ui/core/Container";

import { Card } from "../Card";
import useStyles from "./css/CardContainer";

const CardContainer = ({ movies }) => {
  const classes = useStyles();

  return (
    <div>
      <Container
        className={classes.Container}
        component="div"
        style={{ backgroundColor: "#cfe8fc" }}
        fixed
      >
        {movies &&
          movies.map((movie) => (
            <Card
              title={movie.title}
              description={movie.overview}
              poster={movie.poster_path}
              id={movie.id}
            />
          ))}
      </Container>
    </div>
  );
};

export default CardContainer;
