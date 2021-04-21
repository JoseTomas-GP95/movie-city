import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(({ spacing, palette }) => ({
  root: {
    flex: 1,
    flexDirection: "row",
    height: "auto",
    padding: 0,
    backgroundColor: "red"
  },
  tag: {
    flex: 1,
    borderRadius: "0 3px 3px 0",
    background: "#FFFFFF",
    borderLeft: `3px solid ${palette.primary.main}`,
    fontWeight: "bold",
    padding: "8px 16px",
    margin: spacing(1),
  },
  paper: {
    margin: "auto",
    maxWidth: "120%",
    height: "100vh",
    backgroundColor: "black",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    display: "flex",
    margin: "0",
    width: "120%",
    height: "100vh",
    zoom: "1",
    filter: "alpha(opacity=80)",
    opacity: 0.4,
  },
  cardMovie: {
    display: "flex",
    padding: 10,
  },
}));
