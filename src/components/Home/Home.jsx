import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";

import { CardContainer } from "../Card";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { Calification } from "../Calification";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./css/Home";

const Home = () => {
  // const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [mysearch, setMySearch] = useState("");
  const [calificationHome, setCalificationHome] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=99098b67dde5607759393b5059860efe&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const SearchMovie = (word) => {
    if (!word) {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=99098b67dde5607759393b5059860efe&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    } else {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=99098b67dde5607759393b5059860efe&query=${word}&page=1`
      )
        .then((response) => response.json())
        .then((data) => setMovies(data.results));
    }
  };

  const SearchCalification = (calification) => {
    if (calification === calificationHome) {
      setCalificationHome(0);
    } else {
      setCalificationHome(calification);
    }

    if (calification > 0) {
      if (calification === 1) {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=99098b67dde5607759393b5059860efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=0&vote_average.lte=2&with_watch_monetization_types=flatrate`
        )
          .then((response) => response.json())
          .then((data) => setMovies(data.results));
      }
      if (calification === 2) {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=99098b67dde5607759393b5059860efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=2&vote_average.lte=4&with_watch_monetization_types=flatrate`
        )
          .then((response) => response.json())
          .then((data) => setMovies(data.results));
      }
      if (calification === 3) {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=99098b67dde5607759393b5059860efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=4&vote_average.lte=6&with_watch_monetization_types=flatrate`
        )
          .then((response) => response.json())
          .then((data) => setMovies(data.results));
      }
      if (calification === 4) {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=99098b67dde5607759393b5059860efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=6&vote_average.lte=8&with_watch_monetization_types=flatrate`
        )
          .then((response) => response.json())
          .then((data) => setMovies(data.results));
      }
      if (calification === 5) {
        fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=99098b67dde5607759393b5059860efe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=8&vote_average.lte=10&with_watch_monetization_types=flatrate`
        )
          .then((response) => response.json())
          .then((data) => setMovies(data.results));
      }
    }
  };

  return (
    <div>
      <Navbar 
        setMySearch={setMySearch} 
        SearchMovie={SearchMovie} 

        setCalificationHome={setCalificationHome}
        SearchCalification={SearchCalification}
      />
      <IconButton>

      </IconButton>
      <Container component="div" fixed>
        <CardContainer
          movies={movies}
          mysearch={mysearch}
          calificationHome={calificationHome}
        />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
