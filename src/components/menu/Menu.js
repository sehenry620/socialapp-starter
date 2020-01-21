import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../../HOCs";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  title: {
    flexGrow: 1,
  },
}));


function Menu(props) {
  const classes = useStyles();
  
  const handleLogout = event => {
    event.preventDefault();
    props.logout();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kritter
          </Typography>
          {props.isAuthenticated && (

          <div id="menu-links">
            <Link to="/messagefeed"> <Button className={classes.menuButton}>Message Feed</Button> </Link>
            <Link to="/" onClick={handleLogout}>
              <Button className={classes.menuButton}>Logout</Button>
            </Link>
          </div>
        )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const connectedMenu = withAsyncAction("auth", "logout")(Menu)

export default connectedMenu
