import React from 'react';
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
                  placeholder="Enter your name"
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Paper component="form" className={classes.paper}>
                <InputBase
                  className={classes.input}
                  placeholder="Enter your email"
                />
              </Paper>
            </Grid>
            <Grid item xs>
              <Button
                variant="contained"
                fullWidth
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
