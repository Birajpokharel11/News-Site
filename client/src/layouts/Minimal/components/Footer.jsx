import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Link,
  AppBar,
  Paper,
  Container,
  Box,
  InputBase,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '525px',
    background: '#545FDB'
  },
  paper: {
    padding: '2px 4px',
    height: '57.11111068725586px',
    width: '560px',
    borderRadius: '15.307306289672852px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2%'
  },
  input: {
    fontFamily: 'Ubuntu',
    fontSize: '19px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '1px',
    color: '#2B3D51'
  },
  Button: {
    height: '57.11111068725586px',
    width: '560px',
    borderRadius: '15.307306289672852px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '23px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#000000',
    marginBottom: '6%'
  }
}));

const Footer = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.root}>
        <Container maxWidth="md">
          <Typography
            style={{
              textAlign: 'center',
              height: ' 57.11px',
              fontFamily: ' Ubuntu',
              fontWeight: '500',
              fontSize: '40px',
              lineHeight: ' 100px',
              marginTop: '2%',
              marginBottom: '4%',
              color: 'white'
            }}
          >
            NEWSLETTER
          </Typography>
          <Typography
            style={{
              height: ' 32.36296463012695px',
              fontFamily: ' Ubuntu',
              fontSize: '40px',
              textAlign: 'center',
              marginBottom: '5%',
              color: 'white'
            }}
          >
            Sign Up to Recieve Weekly Data
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div>
              <Paper component="form" className={classes.paper}>
                <InputBase
                  className={classes.input}
                  placeholder="Search Google Maps"
                />
              </Paper>
              <Paper component="form" className={classes.paper}>
                <InputBase
                  className={classes.input}
                  placeholder="Search Google Maps"
                />
              </Paper>
              <Button variant="contained" className={classes.Button}>
                Subscribe Now
              </Button>
            </div>
          </div>
        </Container>
        <Typography
          style={{
            height: '44.74px',
            fontFamily: 'Ubuntu',
            fontWeight: '400',
            fontSize: '23.6477px',
            lineHeight: '23px',
            textAlign: 'center',
            color: 'white'
          }}
        >
          For Media and other inquiries, please email us at
          info@datacenterinvest.asia
        </Typography>
      </Paper>
      <Paper
        style={{
          background: 'white',
          paddingBottom: '0.5%'
        }}
      >
        <Typography
          style={{
            textAlign: 'center',
            fontFamily: 'Ubuntu',
            fontWeight: 'normal',
            fontSize: '18.4846px',
            lineHeight: '22px',
            color: '#545FDB'
          }}
        >
          2021 DataCenterinvest.Asia,All rights reserved
        </Typography>
      </Paper>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
