import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  
  footerContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "5%",
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',

      
    },
  },

}));