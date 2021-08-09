import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signoutStart } from 'src/store/auth/auth.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2%',
    background: 'white'
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: '80%'
    }
  },
  flexGrow: {
    flexGrow: '1'
  },
  auth: {
    padding: theme.spacing(1)
  }
}));

const Topbar = ({ Signout }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <>
          <Link to="/">
            <img className={classes.logo} alt="Logo" src={Logo} />
          </Link>
          <div className={classes.flexGrow} />
        </>
        <div className={classes.auth}>
          <Link to="/login">Log in</Link>
        </div>
        <div className={classes.auth}>
          <Link to="/register">Register </Link>
        </div>
        <div className={classes.auth} onClick={Signout()}>
          <Link>logout </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};
const mapDispatchToProps = (dispatch) => ({
  Signout: (name, email, password) => dispatch(signoutStart())
});

export default connect(null, mapDispatchToProps)(Topbar);
