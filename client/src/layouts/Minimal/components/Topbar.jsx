import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../../assets/img/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2%',
    background: 'white'
  },
  logo: {
    [theme.breakpoints.down('sm')]: {
      width: '60%'
    }
  }
}));

const Topbar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static" elevation={0}>
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
