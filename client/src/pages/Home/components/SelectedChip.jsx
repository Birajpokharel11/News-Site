import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    padding: '7.97492px 11.9624px',
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left'
  }
}));

export default function Markets({ label, selected, onClick, index }) {
  const classes = useStyles();
  return (
    <>
      <Button
        color="primary"
        label={label}
        variant={selected ? 'contained' : 'outlined'}
        onClick={onClick(index)}
        className={classes.button}
      >
        {label}
      </Button>
    </>
  );
}
