import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { signinStart } from '../../../store/auth/auth.actions';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function SignIn({ onSignIn }) {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError('');
  };
  const isValid = () => {
    // email@domain.com
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setError({
        error: 'A valid Email is required '
      });
      return false;
    }
    if (password.length === 0) {
      setError({ error: 'Password is required' });
      return false;
    }
    return true;
  };
  // const authenticate = (data) => {
  //   console.log('jwt', data.data.token);
  //   const jwt = data.data.token;
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('x-auth-token', JSON.stringify(jwt));
  //   }
  // };

  const clickSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      // axios
      //   .post('api/v1/signin', {
      //     email,
      //     password
      //   })
      //   .then((data) => authenticate(data));
      onSignIn(email, password);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      {console.log('error', error)}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => handleEmail(e)}
                value={email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => handlePassword(e)}
                value={password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={clickSubmit}
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/register" variant="body2">
                Dont heve an account ? plz Register
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => ({
  onSignIn: (email, password) => dispatch(signinStart(email, password))
});
export default connect(null, mapDispatchToProps)(SignIn);
