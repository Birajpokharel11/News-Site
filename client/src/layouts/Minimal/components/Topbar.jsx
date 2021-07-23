import React from 'react';

import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

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
  flexGrow: {
    flexGrow: 1
  },
  title: {
    fontFamily: 'Duke Charming DEMO',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '49.4624px',
    lineHeight: '49px',
    color: '#000000'
  },
  search: {
    position: 'relative',
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: '17px',
    marginLeft: '8px',
    width: '100%',
    height: '74px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
    }
  },
  Button: {
    width: '140px',
    height: '74px',
    borderRadius: '17px',
    background: '#545FDB',
    color: 'white',
    fontFamily: 'Ubuntu',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '26px',
    letterSpacing: '0em',
    textAlign: 'left'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 'auto'
    }
  },
  MobileInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    marginLeft: '6px',
    width: 0,
    '&:hover': {
      width: '20ch'
    }
  },
  MobileSearch: {
    position: 'relative',
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: '9px',
    marginLeft: '8px',
    [theme.breakpoints.up('sm')]: {
      width: 'auto'
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
      <Toolbar>
        <img className={classes.logo} alt="Logo" src={Logo} />

        <div className={classes.flexGrow} />
        <Hidden smDown>
          <Paper className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="contained" className={classes.Button}>
              Search
            </Button>
          </Paper>
        </Hidden>
        <Hidden mdUp>
          <Paper className={classes.MobileSearch}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.MobileInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Paper>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
