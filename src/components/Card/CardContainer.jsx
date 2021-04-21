import React from "react";

import Container from "@material-ui/core/Container";

import { Card } from "../Card";
import useStyles from "./css/CardContainer";

const CardContainer = ({ movies, searchType }) => {
  const classes = useStyles();

  return (
    <div>
      <Container
        className={classes.Container}
        component="div"
        style={{ backgroundColor: "#F0F0F2" }}
        fixed
      >
        {movies &&
          movies.map((movie) => (
            <Card
              searchType={searchType}
              title={movie.title}
              description={movie.overview}
              poster={movie.poster_path}
              id={movie.id}
              vote={movie.vote_count}
              average={movie.vote_average}
            />
          ))}
      </Container>
    </div>
  );
};

export default CardContainer;
