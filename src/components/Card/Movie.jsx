import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { MovieCard } from "./";

import { Navbar } from "../Navbar";

import useStyles from "./css/Movie";

const path = "https://image.tmdb.org/t/p/original";

export default function Movie(props) {
  const [movieId, setMovieId] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=99098b67dde5607759393b5059860efe`
    )
      .then((response) => response.json())
      .then((data) => setMovieId(data));
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      <Grid item lg={12}>
        <Paper className={classes.paper}>
          <div className={classes.cardMovie}>
            <img
              className={classes.img}
              alt="complex"
              src={`${path}${movieId.backdrop_path}`}
            />
            <MovieCard
              cover={movieId.poster_path}
              description={movieId.overview}
              title={movieId.original_title}
              originalUrl={movieId.homepage}
              genres={movieId.genres}
            />
          </div>
          <Grid className={classes.root} lg={12}>
            <h1>Categories</h1>
            <Grid item>
              <Grid item lg={12} className={classes.image}>
                {movieId.genres &&
                  movieId.genres.map((category) => (
                    <div className={classes.root2}>
                      <Button className={classes.tag}>{category.name}</Button>
                    </div>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}
