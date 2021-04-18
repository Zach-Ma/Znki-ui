import React, { useEffect } from "react";
import PropTypes from "prop-types";
//import { Test } from './Homepage.styles';
import { request } from "../../shared/services/api";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import Card from "../../components/Card";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from "@material-ui/icons/MoreVert";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About";
import Deck from "../Deck";
import Training from "../Training";
import Statistic from "../Statistic";

const CardList = ({ count = 1, ...props }) =>
  Array.from({ length: count }, (item, index) => <Card key={index} />);

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

const UserMenu = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    // setAnchorEl(null);
  };
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={false}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
    </Menu>
  );
};

const Homepage = () => {
  const classes = useStyles();

  // const open = Boolean(anchorEl);

  useEffect(() => {
    request("get", "card");
  }, []);

  const handleMenu = (event) => {
    // setAnchorEl(event.currentTarget);
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <UserMenu></UserMenu>
          </div>
        </Toolbar>
      </AppBar>
      <Router>
        <Switch>
          <Route path="/deck" component={Deck}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/training" component={Training}></Route>
          <Route path="/statistic" component={Statistic}></Route>
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
