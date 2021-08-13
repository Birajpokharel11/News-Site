import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import container from './SignUp.container';

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

const SignUp = ({ onUserRegister }) => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setError('');
    console.log(name);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setError('');
    console.log(email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError('');
    console.log(password);
  };
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
    if (password.length === 0) {
      setError({ error: 'Password is required with 6 characters' });
      return false;
    }
    return true;
  };
  const clickSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      onUserRegister(name, email, password);

      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // };
      // const newUser = {
      //   name,
      //   email,
      //   password
      // };
      // const body = JSON.stringify(newUser);
      // const res = await axios.post('/api/v1/signup', body, config);
      // console.log(res.data);
      setName('');
      setEmail('');
      setPassword('');
    }

    // eslint-disable-next-line no-unused-expressions
  };

  return (
    <Container component="main" maxWidth="xs">
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
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                onChange={(e) => handleName(e)}
                value={name}
              />
            </Grid>
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
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default container(SignUp);
