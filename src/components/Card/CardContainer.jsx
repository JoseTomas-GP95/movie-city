import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";

import { Card } from "../Card";
import useStyles from "./css/CardContainer";

const CardContainer = (props) => {
  const classes = useStyles();

  const [trends, setTrends] = useState([]);

  const search = props.mysearch;

  useEffect(() => {

    if (search !== null && search !== undefined && search !== "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=99098b67dde5607759393b5059860efe&query=${search}&page=1`
      )
        .then((response) => response.json())
        .then((data) => setTrends(data.results));
        
      } else {

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=99098b67dde5607759393b5059860efe`)
        .then((response) => response.json())
        .then((data) => setTrends(data.results));

      }

  }, [search]);

  console.log(trends)

  return (
    <div>
      <Container
        className={classes.Container}
        component="div"
        style={{ backgroundColor: "#cfe8fc" }}
        fixed
      >
        { 
          trends.map((movie) => (
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
