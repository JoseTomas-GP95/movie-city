import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  homeContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  popular: {
    display: "block",
    flexWrap: "wrap",
  },
  media: {
    height: 140,
  },
}));
