import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import {
  Typography,
  Grid,
  Paper,
  Container,
  InputBase,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '525px',
    background: '#545FDB'
  },
  title: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '40px',
    lineHeight: '46px',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  body: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '30px',
    lineHeight: '34px',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  subtitle: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '19.6477px',
    lineHeight: '23px',
    textAlign: 'center',
    color: '#FFFFFF'
  },
  paper: {
    padding: '2px 4px',
    height: '57px',
    width: '100%',
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2%',
    [theme.breakpoints.up('sm')]: {
      width: '560px'
    }
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
    height: '57px',
    width: '100%',
    borderRadius: '15px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '23px',
    textAlign: 'center',
    color: '#FFFFFF',
    background: '#9DA3E2',
    marginBottom: '6%',

    [theme.breakpoints.up('sm')]: {
      width: '560px'
    },
    '&:hover': {
      background: '#000000'
    }
  },
  footer: {
    textAlign: 'center',
    fontFamily: 'Ubuntu',
    fontWeight: 'normal',
    fontSize: '18.4846px',
    lineHeight: '22px',
    color: '#545FDB'
  }
}));

const Footer = (props) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Container maxWidth="md">
          <Typography className={classes.title}>NEWSLETTER</Typography>
          <Typography className={classes.body}>
            Sign Up to Recieve Weekly Data
          </Typography>

          <Box mt="1.5rem">
            <Grid container direction="column" alignItems="center" spacing={1}>
              <Grid item>
                <Paper component="form" className={classes.paper}>
                  <InputBase
                    className={classes.input}
                    placeholder="Enter your name"
                  />
                </Paper>
              </Grid>
              <Grid item>
                <Paper component="form" className={classes.paper}>
                  <InputBase
                    className={classes.input}
                    placeholder="Enter your email"
                  />
                </Paper>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  fullWidth
                  className={classes.Button}
                >
                  Subscribe Now
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Typography className={classes.subtitle}>
            For Media and other inquiries, please email us at
            info@datacenterinvest.asia
          </Typography>
        </Container>
      </Paper>
      <Paper
        style={{
          background: 'white',
          paddingBottom: '0.5%'
        }}
      >
        <Typography className={classes.footer}>
          {new Date().getFullYear()} DataCenterinvest.Asia, All rights reserved
        </Typography>
      </Paper>
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string
};

export default Footer;
