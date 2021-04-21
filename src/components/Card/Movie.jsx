import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ReactPlayer from "react-player";
import { Modal } from "react-bootstrap";

import { MovieCard } from "./";

import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

import useStyles from "./css/Movie";

const path = "https://image.tmdb.org/t/p/original";

export default function Movie(props) {
  const [movieId, setMovieId] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [video, setVideo] = useState([]);
  const classes = useStyles();

  const MoviePlayerModal = (props) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";

    return (
      <Modal
        className={ classes.trailer }
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ backgroundColor: "#141414" }} closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "white", fontWeight: "bolder" }}
          >
            {movieId.original_title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#141414" }}>
          <ReactPlayer
            url={youtubeUrl + video.key}
            playing
            width="100%"
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    );
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=99098b67dde5607759393b5059860efe`
    )
      .then((response) => response.json())
      .then((data) => setMovieId(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}/videos?api_key=99098b67dde5607759393b5059860efe`
    )
      .then((response) => response.json())
      .then((data) => setVideo(data.results[0]));
  }, []);

  return (
    <div>
      <Navbar 
        video={ video }
      />

      <Grid item lg={12}>
        <Paper className={classes.paper}>
          <div className={classes.cardMovie}>
            <div className="row mt-2">
              <MoviePlayerModal
                show={isOpen}
                onHide={() => {
                  setIsOpen(false);
                }}
              ></MoviePlayerModal>
              <div className="col text-center" style={{ width: "100%" }}></div>
            </div>
            <img
              className={classes.img}
              alt="complex"
              src={`${path}${movieId.backdrop_path}`}
            />

            <MovieCard
              setIsOpen={setIsOpen}
              cover={movieId.poster_path}
              description={movieId.overview}
              title={movieId.original_title}
              originalUrl={movieId.homepage}
              genres={movieId.genres}
              video={ video }
            />
          </div>
        </Paper>
      </Grid>
      <Footer />
    </div>
  );
}
