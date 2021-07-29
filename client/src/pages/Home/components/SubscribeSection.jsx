/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    background: '#545FDB',
    borderRadius: 0,
    padding: '40px 10px',
    [theme.breakpoints.up('md')]: {
      padding: '40px'
    }
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
    height: '57px',
    borderRadius: '15px',
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
    color: '#2B3D51',
    width: '100%',
    paddingLeft: '10px',
    [theme.breakpoints.up('sm')]: {
      width: '560px'
    }
  },
  subscribeButton: {
    height: '57px',
    width: '100%',
    borderRadius: '15px',
    background: '#9DA3E2',
    marginBottom: '6%',

    [theme.breakpoints.up('sm')]: {
      width: '560px'
    },
    '&:hover': {
      background: '#000000'
    }
  },
  label: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '23px',
    textAlign: 'center',
    color: '#FFFFFF',
    textTransform: 'none'
  }
}));

const SubscribeSection = ({ onNewsSubscribeStart }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const isValid = () => {
    if (name.length === 0) {
      setError({ error: 'Name is required' });
      return false;
    }
    // email@domain.com
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError({
        error: 'A valid Email is required '
      });
      return false;
    }
    return true;
  };

  const clickSubmit = (e) => {
    e.preventDefault();

    if (isValid()) {
      onNewsSubscribeStart(email, name);
      setName('');
      setEmail('');
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
    setError('');
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <Box
      component={Paper}
      mt="2rem"
      display="flex"
      justifyContent="center"
      className={classes.root}
    >
      <Container maxWidth="md">
        <Typography className={classes.title}>NEWSLETTER</Typography>
        <Typography className={classes.body}>
          Sign Up to Recieve Weekly Data
        </Typography>

        <Box component="form" mt="1.5rem">
          <Grid
            container
            direction="column"
            alignItems={matchesSM ? undefined : 'center'}
            spacing={1}
          >
            <Grid item xs>
              <Paper component="form" className={classes.paper}>
                <InputBase
                  className={classes.input}
                  onChange={(e) => handleName(e)}
                  placeholder="Enter your name"
                  value={name}
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper component="form" className={classes.paper}>
                <InputBase
                  className={classes.input}
                  onChange={(e) => handleEmail(e)}
                  placeholder="Enter your email"
                  value={email}
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Button
                variant="contained"
                fullWidth
                onClick={clickSubmit}
                classes={{
                  root: classes.subscribeButton, // class name, e.g. `classes-nesting-root-x`
                  label: classes.label // class name, e.g. `classes-nesting-label-x`
                }}
                type="submit"
              >
                Subscribe Now
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography className={classes.subtitle}>
          For media and other inquiries, please email us at
          info@datacenterinvest.asia
        </Typography>
      </Container>
    </Box>
  );
};

export default SubscribeSection;
