import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  Container: {
    flexWrap: "wrap",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1%",
  },
  popular: {
    color: "red",
    display: "block",
    flexWrap: "wrap",
  },
  media: {
    height: 140,
  },
}));
