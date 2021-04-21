import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About";
import Deck from "../Deck";
import CardPage from "../Card";
import Training from "../Training";
import Statistic from "../Statistic";
import UserMenu from "../../components/UserMenu";
import Sidebar from "../../components/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Homepage = () => {
  const classes = useStyles();

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Znki
          </Typography>
          <Sidebar isSidebarOpened={false}></Sidebar>
          <div>
            <IconButton onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <UserMenu></UserMenu>
          </div>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Deck}></Route>
          <Route exact path="/deck" component={Deck}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/training" component={Training}></Route>
          <Route exact path="/statistic" component={Statistic}></Route>
          <Route exact path="/card" component={CardPage}></Route>
          <Route path="*">
            <code>Page Not Found</code>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};

Homepage.propTypes = {
  // bla: PropTypes.string,
};

Homepage.defaultProps = {
  // bla: 'test',
};

export default Homepage;
