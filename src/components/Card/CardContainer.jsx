import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";

import { Card } from "../Card";
import useStyles from "./css/CardContainer";

const CardContainer = ({ mysearch, movies }) => {
  const classes = useStyles();

  const search = mysearch;

  // NOS MUDAMOS A HOME
  // useEffect(() => {
      
  //   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=99098b67dde5607759393b5059860efe&language=en-US&page=1`)
  //   .then((response) => response.json())

  //   .then((data) => setTrends(data.results));

  // }, []);

  // const Search = () => {

  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=99098b67dde5607759393b5059860efe&query=${search}&page=1`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setTrends(data.results));

  // }

  console.log( movies, "POPULAR" )

  return (
    <div>
      <Container
        className={classes.Container}
        component="div"
        style={{ backgroundColor: "#cfe8fc" }}
        fixed
      >
        { 
          movies && movies.map((movie) => (
            <Card
              title={ movie.title }
              description={ movie.overview }
              poster={ movie.poster_path }
              id={ movie.id }
            />
          ))}
      </Container>
    </div>
  );
};

export default CardContainer;
