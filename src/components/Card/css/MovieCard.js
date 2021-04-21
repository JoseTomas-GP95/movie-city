import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: "black",
    maxWidth: 304,
    margin: "auto",
    borderRadius: 0,
    right: "4rem",
    position: "relative",
  },
  content: {
    padding: 24,
  },
  cta: {
    display: "block",
    textAlign: "center",
    color: "blue",
    letterSpacing: "3px",
    fontWeight: 280,
    fontSize: 15,
  },
  title: {
    color: "#fff",
    letterSpacing: "2px",
  },
  movieCard: {
    zoom: "1",
    filter: "alpha(opacity=100)",
    opacity: 0.2,
  },
}));
