import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
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
        <div>
          <Navbar />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
