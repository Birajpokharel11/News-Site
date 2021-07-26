import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

import Logo from '../../../assets/img/logo.svg';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2%',
    background: 'white'
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    }
  },
  toolbar: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  }
}));

const Topbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      color="transparent"
      position="static"
      elevation={0}
    >
      <Toolbar className={classes.toolbar}>
        <>
          <img className={classes.logo} alt="Logo" src={Logo} />
          <div className={classes.flexGrow} />
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
