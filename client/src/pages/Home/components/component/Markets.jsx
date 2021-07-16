import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    background: '#fff',
    border: '1px solid black',
    '&:hover': {
      background: '#3f51b5',
      color: 'white'
    }
  }
}));
export default function Markets({ option }) {
  const classes = useStyles();
  const [isComplete, setComplete] = useState(false);
  const striked = {
    backgroundColor: '#3f51b5',
    color: 'white'
  };
  const notStriked = {
    textDecoration: 'none'
  };
  const handleChange = () => {};
  return (
    <Chip
      onClick={() => setComplete((prev) => !prev)}
      style={isComplete ? striked : notStriked}
      className={classes.chip}
      label={option.label}
      value={option.value}
      key={option.value}
    />
  );
}
