import { Link } from "react-router-dom";

import React from "react";
import Color from "color";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

const path = "https://image.tmdb.org/t/p/original";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    width: "10px",
    [breakpoints.up("md")]: {
      justifyContent: "center",
      flexWrap: "wrap",
    },
  },
}));

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    maxHeight: "100%",
    marginTop: "12%",
    marginBottom: "12%",
    zoom: "60%",
  },
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={(classes.actionArea, classes.root)}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const SolidGameCardDemo = React.memo(function SolidGameCard({
  title,
  description,
  poster,
  id,
}) {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#203f52" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={12}>
        <Link to={`/movie/${id}`}>
          <Grid item>
            <CustomCard
              classes={styles}
              title={title}
              subtitle={description}
              image={path + poster}
            />
          </Grid>
        </Link>
      </Grid>
    </>
  );
});
export default SolidGameCardDemo;
