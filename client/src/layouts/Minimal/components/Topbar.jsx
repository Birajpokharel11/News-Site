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
    height: '64px',
    [theme.breakpoints.up('sm')]: {
      width: '350px'
    },
    [theme.breakpoints.up('md')]: {
      width: '390px'
    },
    [theme.breakpoints.up('lg')]: {
      width: '690px'
    }
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
    transition: theme.transitions.create('width')
  },
  searchButton: {
    width: '140px',
    height: '64px',
    borderRadius: '17px',
    background: '#545FDB',
    color: 'white',
    '&:hover': {
      background: '#545FDB'
    }
  },
  label: {
    fontFamily: 'Ubuntu',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '26px',
    letterSpacing: '0em',
    textAlign: 'left',
    textTransform: 'none'
  },
  mobileIcon: {
    height: 35,
    width: 35
  },
  mobileRoot: {
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    width: '100%'
  },
  mobileInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.spacing(2),
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));

const Topbar = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar
      className={classes.root}
      color="transparent"
      position="static"
      elevation={0}
    >
      <Toolbar>
        {!open && (
          <>
            <img className={classes.logo} alt="Logo" src={Logo} />
            <div className={classes.flexGrow} />
          </>
        )}

        <Hidden smDown>
          <Paper component="form" className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              fullWidth
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              endAdornment={
                <Button
                  size="large"
                  classes={{
                    root: classes.searchButton,
                    label: classes.label
                  }}
                  type="submit"
                >
                  Search
                </Button>
              }
            />
          </Paper>
        </Hidden>
        <Hidden mdUp>
          {!open && (
            <IconButton onClick={toggle}>
              <SearchIcon className={classes.mobileIcon} />
            </IconButton>
          )}

          {open && (
            <Paper component="form" className={classes.mobileRoot}>
              <InputBase
                fullWidth
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.mobileInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                endAdornment={
                  <IconButton onClick={toggle}>
                    <CloseIcon />
                  </IconButton>
                }
              />
            </Paper>
          )}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
