import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import CustomAlert from '../../components/CustomAlert';

import { Topbar, Footer } from './components';

import container from './Minimal.container';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  content: {
    marginTop: 10,
    height: '100%'
  }
}));

const Minimal = (props) => {
  const { children, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar {...rest} />
      <main className={classes.content}>{children}</main>
      <Footer />
      <CustomAlert />
    </div>
  );
};

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default container(Minimal);
