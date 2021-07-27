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
import { subscribe } from './apiMethods';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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
  subscribeButton: {
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
  }
}));

const SubscribeSection = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

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
    const user = {
      name,
      email
    };
    if (isValid()) {
      subscribe(user).then((data) => {
        if (data.error) console.log('fetchError', data.error);
        // eslint-disable-next-line no-unused-expressions
        else setEmail(''), setName(''), setOpen(true);
      });
    }
  };
  const handleName = (e) => {
    setName(e.target.value), setError('');
  };
  const handleEmail = (e) => {
    setEmail(e.target.value), setError('');
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <Box
      component={Paper}
      mt="2rem"
      display="flex"
      justifyContent="center"
      className={classes.root}
    >
      {console.log('errors', error)}
      <Container maxWidth="md">
        <Typography className={classes.title}>NEWSLETTER</Typography>
        <Typography className={classes.body}>
          Sign Up to Recieve Weekly Data
        </Typography>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          direction="up"
          onClose={handleClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="success"
          >
            User Subscribtion Sucessfull
          </MuiAlert>
        </Snackbar>

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
                className={classes.subscribeButton}
                type="submit"
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
    </Box>
  );
};

export default SubscribeSection;
