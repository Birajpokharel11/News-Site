import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signoutStart } from 'src/store/auth/auth.actions';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Hidden } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  UI: {
    display: 'flex'
  },
  linkText: {
    textDecoration: 'none',
    padding: '2%',
    color: 'black',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '19.8453px'
  }
}));

const Navbar = ({ auth: { isAuthenticated }, signoutStart }) => {
  const classes = useStyles();
  const authLinks = (
    <ul style={{ display: 'flex' }}>
      <li style={{ display: 'flex' }}>
        <Hidden smDown>
          <Link className={classes.linkText} onClick={signoutStart}>
            Logout
          </Link>
        </Hidden>
        <Link className={classes.linkText} onClick={signoutStart}>
          <ExitToAppIcon />
        </Link>
        <Link to="/dashboard" className={classes.linkText}>
          Dashboard
        </Link>
        <Link to="/edit_profile" className={classes.linkText}>
          EditProfile
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className={classes.UI}>
      <li
        style={{
          marginRight: '22%'
        }}
      >
        <Link className={classes.linkText} to="/register">
          Register
        </Link>
      </li>
      <li
        style={{
          marginRight: '22%'
        }}
      >
        <Link className={classes.linkText} to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { signoutStart })(Navbar);
