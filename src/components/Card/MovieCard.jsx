import React from "react";
import cx from "clsx";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";

import useStyles from "./css/MovieCard";

const path = "https://image.tmdb.org/t/p/original";

export const NewsCard2Demo = React.memo(function NewsCard2({
  cover,
  description,
  title,
  originalUrl,
}) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.movieCard}
        classes={mediaStyles}
        image={`${path}${cover}`}
      />
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={360}
            color={"common.white"}
            textAlign={"center"}
          >
            <h1 className={styles.title}>{title}</h1>
            <p>{description}</p>
          </Box>
          <Typography className={styles.cta} variant={"overline"}>
            <a target="_blank" href={originalUrl}>
              Explore
            </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default NewsCard2Demo;
