import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  CardMedia,
  Card,
  Container
} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Test from './testjpg.jpg';
import Test2 from './logo2.jpg';
import Test3 from './logo3.jpg';
import Test4 from './logo4.jpg';
import Test5 from './logo5.jpg';

const useStyles = makeStyles((theme) => ({
  root: { padding: '2%', background: 'White' },
  title: {
    width: '460%',
    height: '49.46%',
    fontFamily: 'Duke Charming DEMO',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '49.4624px',
    lineHeight: '49px',
    color: '#000000'
  },
  paper: {
    display: 'flex',
    width: '690px',
    height: '74px',
    left: '1075px',
    top: '53px',
    borderRadius: '15px',
    boxShadow: '24px 4px 24px rgba(84, 95, 219, 0.25)'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  Button: {
    width: '167px',
    height: '74px',
    background: '#545FDB',
    color: 'white',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
    borderRadius: '17px'
  },
  section1: {
    flex: '50%'
  },
  section2: {
    flex: '50%'
  },
  griditem: {
    height: '908px',
    width: '100%',
    background: 'white',
    marginTop: '105px',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)'
  },
  card: {
    position: 'absolute',
    height: '551.8067626953125px',
    width: ' 827.7100830078125px',
    left: '132px',
    top: '281px',
    borderRadius: '16.91234588623047px'
  },
  cardMedia: {
    background: 'red'
  },
  cardwords: {
    position: 'absolute',
    left: '132px',
    top: '853.0352172851562px',
    width: '827.71px',
    height: '109.43px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '29.8453px',
    lineHeight: '34px'
  },
  card2: {
    position: 'absolute',
    width: '403.91px',
    height: '269.27px',
    left: '979.61px',
    top: '281px',
    background: 'url(starship launch date.jpg)',
    filter: 'drop-shadow(0px 3.97938px 23.8763px rgba(84, 95, 219, 0.25))',
    borderRadius: '16.9123px'
  },
  cardwords2: {
    position: 'absolute',
    width: '403.91px',
    height: '39.79px',
    left: '979.61px',
    top: '560.55px',

    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15.9175px',
    lineHeight: '18px',
    color: '#000000'
  },
  card3: {
    position: 'absolute',
    width: '403.91px',
    height: '269.27px',
    left: '1403.41px',
    top: '281px',

    filter: 'drop-shadow(0px 3.97938px 23.8763px rgba(84, 95, 219, 0.25))',
    borderRadius: '16.9123px'
  },
  cardwords3: {
    position: 'absolute',
    width: '403.91px',
    height: '39.79px',
    left: '1403.41px',
    top: '560.55px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15.9175px',
    lineHeight: '18px',
    color: '#000000'
  },
  card4: {
    position: 'absolute',
    width: '403.91px',
    height: '269.27px',
    left: '979.61px',
    top: '650.09px',
    filter: 'drop-shadow(0px 3.97938px 23.8763px rgba(84, 95, 219, 0.25))',
    borderRadius: '16.9123px'
  },
  cardwords4: {
    position: 'absolute',
    width: '403.91px',
    height: '39.79px',
    left: '979.61px',
    top: '929.64px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15.9175px',
    lineHeight: '18px',
    color: '#000000'
  },
  card5: {
    position: 'absolute',
    width: '403.91px',
    height: '269.27px',
    left: '1403.41px',
    top: '650.09px',
    filter: 'drop-shadow(0px 3.97938px 23.8763px rgba(84, 95, 219, 0.25))',
    borderRadius: '16.9123px'
  },
  cardwords5: {
    position: 'absolute',
    width: '403.91px',
    height: ' 39.79px',
    left: '1403.41px',
    top: '929.64px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15.9175px',
    lineHeight: '18px',
    color: '#000000'
  }
}));

const Topbar = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.root} color="transparent" position="fixed">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Toolbar>
              <Typography variant="h3" className={classes.title}>
                DATACenterInvest.ASIA
              </Typography>
            </Toolbar>
          </Grid>
          <Grid item>
            <Paper component="form" className={classes.paper}>
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase className={classes.input} placeholder="Search" />
              <Button
                variant="contained"
                color="Primary"
                className={classes.Button}
              >
                Search
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </AppBar>
      <Paper className={classes.griditem}>
        <Grid container>
          <Grid item>
            <img src={Test} className={classes.card} alt="loading" />
            <Typography className={classes.cardwords}>
              "London Black Lives Matter": peaceful Protest from Hyde Park to
              Trafalgar Square via Buckingham Palace
            </Typography>
          </Grid>
          <Grid item>
            <img src={Test2} className={classes.card2} alt="loading" />
            <Typography className={classes.cardwords2}>
              "London Black Lives Matter": peaceful Protest from Hyde Park to
              Trafalgar Square via Buckingham Palace
            </Typography>
          </Grid>
          <Grid item>
            <img src={Test3} className={classes.card3} alt="loading" />
            <Typography className={classes.cardwords3}>
              "London Black Lives Matter": peaceful Protest from Hyde Park to
              Trafalgar Square via Buckingham Palace
            </Typography>
          </Grid>
          <Grid item>
            <img src={Test4} className={classes.card4} alt="loading" />
            <Typography className={classes.cardwords4}>
              "London Black Lives Matter": peaceful Protest from Hyde Park to
              Trafalgar Square via Buckingham Palace
            </Typography>
          </Grid>{' '}
          <Grid item>
            <img src={Test5} className={classes.card5} alt="loading" />
            <Typography className={classes.cardwords5}>
              "London Black Lives Matter": peaceful Protest from Hyde Park to
              Trafalgar Square via Buckingham Palace
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

Topbar.propTypes = {
  className: PropTypes.string
};

export default Topbar;
// title: {
//   position: 'absolute',
//   width: '460%',
//   height: '49.46%',
//   left: ' 65px',
//   top: ' 65px',
//   fontFamily: 'Duke Charming DEMO',
//   fontStyle: 'normal',
//   fontWeight: 'normal',
//   fontSize: '49.4624px',
//   lineHeight: '49px',
//   color: '#000000'
// }
