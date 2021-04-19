import React, { useState, useEffect } from "react";

import Container from "@material-ui/core/Container";

import { Card } from "../Card";
import useStyles from "./css/CardContainer";

const CardContainer = () => {
  const classes = useStyles();

  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=99098b67dde5607759393b5059860efe`
    )
      .then((response) => response.json())
      .then((data) => setTrends(data.results));
  }, []);

  console.log(trends);

  return (
    <div>
      <Container
        className={ classes.Container }
        component="div"
        style={{ backgroundColor: "#cfe8fc" }}
        fixed
      >
        {
        trends.map( movie => (
          <Card 
            title={ movie.title } 
            description={ movie.overview } 
            poster={ movie.poster_path }
          />
      ))
      }
      </Container>
    </div>
  );
};

export default CardContainer;
