import React from "react";

/* ------------------------------- MATERIAL UI ------------------------------ */
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import baseDatos from "../../db";

import useStyles from "./css/Card";

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={baseDatos.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {baseDatos.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {baseDatos.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="col-md-12">
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
