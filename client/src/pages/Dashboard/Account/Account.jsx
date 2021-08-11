import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Profile from './profile';
import ProfileDetails from './ProfileDetails.jsx';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AccountTab from './AccountTab';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  },
  space: {
    marginTop: '20px'
  }
}));
function Account() {
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="lg" className={classes.container}>
        <AccountTab />
      </Container>
    </div>
  );
}

export default Account;
