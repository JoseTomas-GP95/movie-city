import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

import { Link } from "react-router-dom";

import useStyles from "./css/Navbar";

export default function SearchAppBar(props) {
  const classes = useStyles();

  const [search, setSearch] = useState("");

  const sendSearch = (search) => {
    props.SearchMovie(search);
    setSearch("");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
          <Link className={classes.link} to="/">
              Movie City
            </Link>
          </Typography>
          <div className={classes.search}>
            <InputBase
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              placeholder="Buscar..."
              type="search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div 
              onClick={() => sendSearch(search)}
              className={classes.searchIcon}
            >
              <SearchIcon />
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
