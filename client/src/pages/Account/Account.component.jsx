import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { AccountProfile, AccountDetails } from './components';

import container from './Account.container';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Account = (props) => {
  const classes = useStyles();

  const {
    auth: { user }
  } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          {user && <AccountProfile user={user} />}
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          {user && <AccountDetails user={user} />}
        </Grid>
      </Grid>
    </div>
  );
};

export default container(Account);
