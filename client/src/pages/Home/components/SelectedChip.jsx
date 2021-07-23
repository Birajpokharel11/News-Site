import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    background: 'rgba(235, 243, 255, 0.28)',
    border: '1.99373px solid #E8EAEE',
    boxSizing: 'border-box',
    borderRadius: '3.98746px'
  },
  label: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '13.9561px',
    lineHeight: '16px',
    textTransform: 'none'
  },
  selected: {
    background: '#9DA3E2',
    border: 'none',
    color: '#FFFFFF',
    '&:hover': {
      background: '#9DA3E2'
    }
  }
}));

export default function Markets({ label, selected, onClick, index }) {
  const classes = useStyles();
  return (
    <Button
      size="small"
      className={clsx({
        [classes.button]: true,
        [classes.selected]: selected
      })}
      classes={{
        label: classes.label
      }}
      onClick={onClick(index)}
    >
      {label}
    </Button>
  );
}
