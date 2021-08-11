import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import test from './test.jpg';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccountTab from './AccountTab';
import { connect } from 'react-redux';

const user = {
  avatar: { test },
  city: 'Los Angeles',
  country: 'USA',
  jobTitle: 'Senior Developer',
  name: 'Katarina Smith',
  timezone: 'GTM-7'
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',

    [theme.breakpoints.up('sm')]: {
      height: 490,
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      height: 390,
      width: 400
    }
  },
  avatar: {
    height: 200,
    width: 200,
    [theme.breakpoints.up('sm')]: {
      height: 150,
      width: 150
    }
  }
}));

const Profile = ({ className, auth: { success, data } }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={clsx(classes.root, className)}>
        <CardContent>
          <Box alignItems="center" display="flex" flexDirection="column">
            <Avatar className={classes.avatar} src={test} />
            <Typography color="textPrimary" gutterBottom variant="h3">
              {data.name}
            </Typography>
            <Typography color="textPrimary" gutterBottom variant="h3">
              {data.email}
            </Typography>
            <Typography color="textSecondary" variant="body1">
              {`${user.city} ${user.country}`}
            </Typography>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
            >
              {`${moment().format('hh:mm A')} ${user.timezone}`}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardActions>
          <Button color="primary" fullWidth variant="text">
            Upload picture
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

const mapStateToProps = (state) => ({
  auth: state.auth.user
});
export default connect(mapStateToProps, null)(Profile);
