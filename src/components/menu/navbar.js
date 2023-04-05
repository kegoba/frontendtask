import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
    fontSize: "15px",
    marginRight: theme.spacing(5),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },

  navbar_style : {
    backgroundColor: "#FFFFFF",
    marginTop: "5px"
    
  },
  btn:{
  borderColor: "#000000",
  },
  mobile_nav:{
    width : "20%",
    align : "right",
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',

  },


}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar  className={classes.navbar_style}>

      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo} >
          <img src="https://bazaar.ui-lib.com/assets/images/logo2.svg" alt=""/>
       
        </Typography>
        {isMobile ? (
          <DrawerComponent className={classes.mobile_nav} justif />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Features
            </Link>
            <Link to="/Demos" className={classes.link}>
              Demos
            </Link>
            <Link to="/Documentation" className={classes.link}>
              Documentation
            </Link>
            <Link to="/Purchase" className={classes.link}>
             <Button className={classes.btn} variant="outlined"> Purchase Now</Button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;