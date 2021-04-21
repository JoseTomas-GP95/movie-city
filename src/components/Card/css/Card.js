import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: 350,
    maxHeight: "80%",
    // marginTop: "2%",
    // marginBottom: "5%",
    margin: "2.1%",
    zoom: "70%",
    transition: "1s",
    "&:hover": {
      cursor: "pointer",
      zoom: "75%",
      transform: "scale(1.04)",
      filter: 'contrast(1.2)'
    },
    title: {
      textAlign: "center",
      color: 'red'
    },
  },
  description: {
    fontSize: "160%",
  },
  media: {
    width: "auto",
    height: "100vh",
  },
  link: {
    textDecoration: "none",
  },
}));
