import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

/* ------------------------------- MATERIAL UI ------------------------------ */
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useStyles from "./css/Card";

const path = "https://image.tmdb.org/t/p/original";

export default function MediaCard({ title, description, poster, id }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to={`/movie/${ id }`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={path + poster}
            title="movie cover"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="col-md-12">
          <Button size="small" color="primary">
            View More
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}
