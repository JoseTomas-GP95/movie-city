import React from "react";

import { Link } from "react-router-dom";

/* ------------------------------- MATERIAL UI ------------------------------ */
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";
import { compose, spacing, palette } from "@material-ui/system";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import StarsIcon from "@material-ui/icons/Stars";

import useStyles from "./css/Card";

const path = "https://image.tmdb.org/t/p/original";

const Box = styled("div")(compose(spacing, palette));

export default function MediaCard({ title, average, vote, poster, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link className={classes.link} to={`/movie/${id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={path + poster}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h1">
              {title}
            </Typography>
            <Typography
              className={classes.description}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {/* aqui van a ir el average y la otra cosa */}
              <Box color="white" bgcolor="blue" p={2}>
                <HowToVoteIcon /> Number of voters: {vote}
              </Box>
              <Box color="white" bgcolor="purple" p={2}>
                <StarsIcon /> Average votes: {average}
              </Box>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
