import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import ClearIcon from '@material-ui/icons/Clear';

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
    color: '#000000'
  },
  nested: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4)
    }
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
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '22.1986px',
    color: '#000000'
  },
  endbutton: {
    color: '#9DA3E2',
    background: '#E3E6FF',
    border: '1.93368px solid #9DA3E2',
    boxSizing: 'border-box',
    borderRadius: '3.86736px',
    '&:hover': {
      background: 'none'
    }
  },
  label: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '13.5358px',
    lineHeight: '15px',
    textTransform: 'none'
  }
}));

const CategorySection = ({
  country,
  handleClickCountry,
  companies,
  handleClickCompanies,
  toggleAllCompanies,
  themes,
  handleClickThemes,
  toggleAllThemes
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box component={Container} mt="1.5rem" mb="2rem">
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
            <Button
              size="small"
              classes={{ root: classes.endbutton, label: classes.label }}
              onClick={() => toggleAllCompanies(true)}
            >
              Select All
            </Button>
            <Button
              size="small"
              classes={{ root: classes.endbutton, label: classes.label }}
              endIcon={<ClearIcon />}
              onClick={() => toggleAllCompanies(false)}
            >
              Reset Filter
            </Button>
          </Paper>
        </Box>
        <Box className={classes.nested}>
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
            <Button
              size="small"
              classes={{ root: classes.endbutton, label: classes.label }}
              onClick={() => toggleAllThemes(true)}
            >
              Select All
            </Button>
            <Button
              size="small"
              classes={{ root: classes.endbutton, label: classes.label }}
              endIcon={<ClearIcon />}
              onClick={() => toggleAllThemes(false)}
            >
              Reset Filter
            </Button>
          </Paper>
        </Box>
      </Collapse>
    </Box>
  );
};

export default CategorySection;
