import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

import SelectedChip from './SelectedChip';

const useStyles = makeStyles((theme) => ({
  topbutton: {
    width: '300px',
    borderColor: '#E5E5E5',
    height: '80px',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20.9442px',
    color: '#000000',
    marginLeft: '1%',
    marginTop: '1%'
  },
  nested: {
    paddingLeft: theme.spacing(4)
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    },
    elevation: '0'
  },
  categories: {
    marginBottom: '2%',
    height: '28.858139038085938px',
    width: '149.6369171142578px',
    borderRadius: 'nullpx',
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '22.1986px',
    color: '#000000'
  },
  endbutton: {
    fontFamily: 'Montserrat',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '16px',
    letterSpacing: '0em',
    textAlign: 'left',
    background: '#9DA3E2',
    color: '#E5E5E5',
    '&:hover': {
      background: 'none'
    }
  }
}));

const CategorySection = ({
  country,
  handleClickCountry,
  companies,
  handleClickCompanies,
  themes,
  handleClickThemes
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box component={Container} mt="1.5rem">
      <Button
        className={classes.topbutton}
        variant="outlined"
        onClick={handleClick}
      >
        Categories Selector
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box mt="2rem" mb="2rem" className={classes.nested}>
          <Typography className={classes.categories}>Market</Typography>
          <Paper
            value={country}
            className={classes.chipContainer}
            elevation={0}
          >
            {country.map((option, index) => (
              <SelectedChip
                key={option.value}
                index={index}
                label={option.label}
                selected={option.selected}
                onClick={handleClickCountry}
              />
            ))}
            <Button>Select All</Button>
            <Button>Reset Filter</Button>
          </Paper>
        </Box>
        <Box mb="2rem" className={classes.nested}>
          <Typography className={classes.categories}>Companies</Typography>
          <Paper
            value={country}
            className={classes.chipContainer}
            elevation={0}
          >
            {companies.map((option, index) => (
              <SelectedChip
                key={option.key}
                index={index}
                label={option.label}
                selected={option.selected}
                onClick={handleClickCompanies}
              />
            ))}
            <Button>Select All</Button>
            <Button>Reset Filter</Button>
          </Paper>
        </Box>
        <Box mb="2rem" className={classes.nested}>
          <Typography className={classes.categories}>Themes</Typography>
          <Paper
            value={country}
            className={classes.chipContainer}
            elevation={0}
          >
            {themes.map((option, index) => (
              <SelectedChip
                key={option.key}
                index={index}
                label={option.label}
                selected={option.selected}
                onClick={handleClickThemes}
              />
            ))}
            <Button className={classes.endbutton}>Select All</Button>
            <Button className={classes.endbutton}>Reset Filter</Button>
          </Paper>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CategorySection;
