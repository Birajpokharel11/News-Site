import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, PaperBox, Grid, Paper, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { NewsItem } from '../../components';
import { SelectedChip } from './components';

import container from './Home.container';

const options = [
  { value: 'SG', label: 'Singapore' },
  { value: 'MY', label: 'Malaysia' },
  { value: 'ID', label: 'Indonesia' },
  { value: 'VN', label: 'Vietnam' },
  { value: 'KH', label: 'Cambodia' },
  { value: 'LA', label: 'Laos' },
  { value: 'MM', label: 'Myanmar(Burma)' },
  { value: 'HK', label: 'Hong Kong' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'KR', label: 'South Korea' },
  { value: 'JP', label: 'Japan' },
  { value: 'AU', label: 'Australia' },
  { value: 'NZ', label: 'New Zealand' }
];

const options1 = [
  { type: 'company', key: 0, label: 'Digital Realty' },
  { type: 'company', key: 1, label: 'China Telecom' },
  { type: 'company', key: 2, label: 'NTT' },
  { type: 'company', key: 3, label: 'KDDI Telehouse' },
  { type: 'company', key: 4, label: 'Coresite' },
  { type: 'company', key: 5, label: 'Verizon' },
  { type: 'company', key: 6, label: 'Cyxtera' },
  { type: 'company', key: 7, label: 'China Unicom' },
  { type: 'company', key: 8, label: 'China Mobile' },
  { type: 'company', key: 9, label: 'Amazon Web Services' },
  { type: 'company', key: 10, label: '365 Data Centers' },
  { type: 'company', key: 11, label: 'CyrusOne' },
  { type: 'company', key: 12, label: 'GDS' },
  { type: 'company', key: 13, label: 'Bridge Data Centres' },
  { type: 'company', key: 14, label: 'Keppel DC' },
  { type: 'company', key: 15, label: 'Global Switch' },
  { type: 'company', key: 16, label: 'Lumen/CenturyLink' },
  { type: 'company', key: 17, label: 'Flexential' },
  { type: 'company', key: 18, label: 'Racks Central' },
  { type: 'company', key: 19, label: 'Telstra' },
  { type: 'company', key: 20, label: 'Singapore Technologies Telemedia' },
  { type: 'company', key: 21, label: '1-Net' },
  { type: 'company', key: 22, label: 'Microsoft' },
  { type: 'company', key: 23, label: 'Facebook' },
  { type: 'company', key: 24, label: 'Yondr' },
  { type: 'company', key: 25, label: 'Vantage Data Centers' },
  { type: 'company', key: 26, label: 'Vapor IO' },
  { type: 'company', key: 27, label: 'QTS' },
  { type: 'company', key: 28, label: 'NVIDIA' },
  { type: 'company', key: 29, label: 'MegaPort' },
  { type: 'company', key: 30, label: 'Iron Mountain' },
  { type: 'company', key: 31, label: 'Google' },
  { type: 'company', key: 32, label: 'EdgeConnex' },
  { type: 'company', key: 33, label: 'EdgeCore' },
  { type: 'company', key: 34, label: 'Evoque Data Centers' },
  { type: 'company', key: 35, label: 'Compass Datacenters' },
  { type: 'company', key: 36, label: 'Cologix' },
  { type: 'company', key: 37, label: 'CapitaLand' }
];

const options2 = [
  { type: 'theme', key: 38, label: 'Sustainability' },
  { type: 'theme', key: 39, label: 'connectivity' },
  { type: 'theme', key: 40, label: 'technology' },
  { type: 'theme', key: 41, label: 'security' },
  { type: 'theme', key: 42, label: 'sovereignty' },
  { type: 'theme', key: 43, label: 'data protection' },
  { type: 'theme', key: 44, label: 'e-commerce' },
  { type: 'theme', key: 45, label: 'cloud' },
  { type: 'theme', key: 46, label: 'WAN' },
  { type: 'theme', key: 47, label: '5G' },
  { type: 'theme', key: 48, label: 'bandwidth' },
  { type: 'theme', key: 49, label: 'digital' },
  { type: 'theme', key: 50, label: 'telecommunication' },
  { type: 'theme', key: 51, label: 'telco' },
  { type: 'theme', key: 52, label: 'infrastructure' }
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  chipContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    },
    elevation: '0'
  },
  pagination: {
    width: '191.18px',
    height: '22.61px',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16.4457px',
    lineHeight: '23px',
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#000000',
    flex: 'none',
    order: '0',
    flexGrow: '0',
    margin: '0px 8.22286px'
  },
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

const Home = (props) => {
  const classes = useStyles();

  const {
    news: { newsIDs, news, loading },
    onFetchNewsStart
  } = props;

  const [country, setCountry] = useState([
    ...options.map((item) => {
      if (item.value === 'SG') {
        return {
          ...item,
          selected: true
        };
      }
      return item;
    })
  ]);
  const [companies, setCompanies] = useState([
    ...options1.map((item) => {
      if (
        item.label === 'facebook' ||
        item.label === 'Google' ||
        item.label === 'Microsoft'
      ) {
        return {
          ...item,
          selected: true
        };
      }
      return item;
    })
  ]);
  const [themes, setThemes] = useState([
    ...options2.map((item) => {
      if (item.label === 'technology') {
        return {
          ...item,
          selected: true
        };
      }
      return item;
    })
  ]);

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    onFetchNewsStart(
      country.find((item) => item.selected).label,
      companies.filter((item) => item.selected).map((item) => item.label),
      themes.filter((item) => item.selected).map((item) => item.label)
    );
  };

  const handleClickCountry = (index) => () => {
    setCountry((prev) => {
      return prev.map((option, idx) => {
        if (index === idx) {
          return {
            ...option,
            selected: true
          };
        }
        return {
          ...option,
          selected: false
        };
      });
    });
    search();
  };

  const handleClickCompanies = (index) => () => {
    setCompanies((prev) => {
      return prev.map((option, idx) => {
        if (index === idx) {
          return {
            ...option,
            selected: !option.selected
          };
        }
        return option;
      });
    });
    search();
  };

  const handleClickThemes = (index) => () => {
    setThemes((prev) => {
      return prev.map((option, idx) => {
        if (index === idx) {
          return {
            ...option,
            selected: !option.selected
          };
        }
        return option;
      });
    });
    search();
  };

  const getContent = () => {
    const list = newsIDs.map((id) => news[id]);
    if (loading) {
      return <CircularProgress />;
    }

    if (list.length === 0) {
      <p>
        <i>No results</i>
      </p>;
    }

    return (
      <ul>
        <Grid container>
          {list.slice(0, 10).map((item) => (
            <>
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <NewsItem key={item.guid.text} item={item} />
              </Grid>
            </>
          ))}
        </Grid>
      </ul>
    );
  };

  return (
    <Box mt="1.5rem">
      <Button className={classes.topbutton} variant="outlined">
        Categorie Selector
      </Button>

      <Container maxWidth="xl" style={{ marginTop: '2%' }}>
        <Box mb="2rem">
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
        <Box mb="2rem">
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
        <Box mb="2rem">
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
      </Container>
      <Container maxWidth="xl">
        <Box></Box>
        <Box>
          {getContent()}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography className={classes.pagination}>
              Seemore result
            </Typography>
            <Typography className={classes.pagination}>
              Seemore result
            </Typography>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default container(Home);
