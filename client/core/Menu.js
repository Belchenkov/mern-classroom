import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Library from '@material-ui/icons/LocalLibrary';
import Button from '@material-ui/core/Button';

import auth from './../auth/auth-helper';

const isActive = (history, path) => {
    if (history.location.pathname == path)
        return {color: '#c6a3af'};
    else
        return {color: '#ffffff'};
}

const isPartActive = (history, path) => {
    if (history.location.pathname.includes(path))
        return {color: '#fffde7', backgroundColor: '#f57c00', marginRight:10}
    else
        return {color: '#616161', backgroundColor: '#fffde7', border:'1px solid #f57c00', marginRight:10}
};

const Menu = withRouter(({ history }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                MERN Class Room
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>
            {
                !auth.isAuthenticated() && (
                    <span>
                      <Link to="/signup">
                        <Button style={isActive(history, "/signup")}>
                            Sign up
                        </Button>
                      </Link>
                      <Link to="/signin">
                        <Button style={isActive(history, "/signin")}>
                            Sign In
                        </Button>
                      </Link>
                    </span>
                )
            }
            {
                auth.isAuthenticated() && ( <span>
                  {
                      auth.isAuthenticated().user.educator && (
                          <Link to="/teach/courses">
                              <Button style={isPartActive(history, "/teach/")}>
                                  <Library/> Teach
                              </Button>
                          </Link>)}
                          <Link to={"/user/" + auth.isAuthenticated().user._id}>
                            <Button
                                style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}
                            >My Profile</Button>
                          </Link>
                          <Button
                              color="inherit"
                              onClick={ () => {
                                    auth.clearJWT(() => history.push('/'))
                            }}
                          >Sign out</Button>
                </span>)
            }
        </Toolbar>
    </AppBar>
))

export default Menu;
