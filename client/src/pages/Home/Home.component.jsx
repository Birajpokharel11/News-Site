import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NewsItem } from '../../components';
import ButtonList from './components/ButtonList';
import container from './Home.container';
import { Typography, Paper } from '@material-ui/core';
import Markets from './components/component/Markets';
import Companies from './components/component/Companies';
import Themes from './components/component/Themes';

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
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  boxcontrol: {
    padding: '3%',
    background: '#f8fbff',
    '&:hover': {
      background: 'white',
      color: 'white',
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      borderTopStyle: 'solid'
    }
  }
}));

const Home = (props) => {
  const classes = useStyles();

  const {
    news: { newsIDs, news, loading },
    onFetchNewsStart
  } = props;

  const [country, setCountry] = useState('SG');
  const [companies, setCompanies] = useState([]);
  const [themes, setThemes] = useState([]);

  const [chipData, setChipData] = useState([]);

  useEffect(() => {
    setCompanies([...options1]);
    setThemes([...options2]);
    setChipData([...options1, ...options2]);
    onFetchNewsStart(
      country,
      options1.map((item) => item.label),
      options2.map((item) => item.label)
    );
  }, []);

  const search = () => {
    onFetchNewsStart(
      country,
      companies.map((item) => item.label),
      themes.map((item) => item.label)
    );
  };

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleDelete = (chipToDelete) => () => {
    if (chipToDelete.type === 'company') {
      const currentIndex = companies
        .map((item) => item.key)
        .indexOf(chipToDelete.key);
      const newChecked = [...companies];
      newChecked.splice(currentIndex, 1);
      setCompanies(newChecked);
    }
    if (chipToDelete.type === 'theme') {
      const currentIndex = themes
        .map((item) => item.key)
        .indexOf(chipToDelete.label);
      const newChecked = [...themes];
      newChecked.splice(currentIndex, 1);
      setThemes(newChecked);
    }

    const currentChipIndex = chipData
      .map((item) => item.key)
      .indexOf(chipToDelete.key);
    const updatedChips = [...chipData];
    updatedChips.splice(currentChipIndex, 1);
    setChipData(updatedChips);
    search();
  };

  const handleMenuItemClick = (item, title) => () => {
    if (title === 'Companies') {
      const currentIndex = companies.map((item) => item.key).indexOf(item.key);
      const newChecked = [...companies];

      if (currentIndex === -1) {
        newChecked.push(item);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setCompanies(newChecked);
    }
    if (title === 'Themes') {
      const currentIndex = themes.map((item) => item.key).indexOf(item.key);
      const newChecked = [...themes];

      if (currentIndex === -1) {
        newChecked.push(item);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setThemes(newChecked);
    }

    const currentChipIndex = chipData.map((item) => item.key).indexOf(item.key);
    const newCheckedChip = [...chipData];
    if (currentChipIndex === -1) {
      newCheckedChip.push(item);
    } else {
      newCheckedChip.splice(currentChipIndex, 1);
    }

    setChipData(newCheckedChip);
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
        {list.map((item) => (
          <NewsItem key={item.guid.text} item={item} />
        ))}
      </ul>
    );
  };
  return (
    <Box mt="1.5rem" style={{ backgroundColor: '#f8fbff', margin: '0' }}>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Markets
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={country}
                onChange={handleChangeCountry}
                label="Markets"
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <ButtonList
              title="Companies"
              options={options1}
              checked={companies.map((item) => item.key)}
              handleMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid item>
            <ButtonList
              title="Themes"
              options={options2}
              checked={themes.map((item) => item.key)}
              handleMenuItemClick={handleMenuItemClick}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={search}>
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid container direction="column" item spacing={3}>
            <Grid item>
              <Typography variant="h3">Market</Typography>
            </Grid>
            <Grid item>
              <Paper value={country} className={classes.boxcontrol}>
                {options.map((option) => (
                  <Markets option={option} />
                ))}
              </Paper>
            </Grid>
            <Grid item>
              <Typography variant="h3">Companies</Typography>
            </Grid>
            <Grid item>
              <Paper value={country} className={classes.boxcontrol}>
                {console.log('hello', options1)}
                {options1.map((option) => (
                  <Companies option={option} />
                ))}
              </Paper>
            </Grid>
            <Grid item>
              <Typography variant="h3">Themes</Typography>
            </Grid>
            <Grid item>
              <Paper value={country} className={classes.boxcontrol}>
                {options2.map((options) => (
                  <Themes option={options} />
                ))}
              </Paper>
            </Grid>
            <Grid item>
              <Grid item></Grid>
              <Grid item></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box component="ul" className={classes.root}>
          {chipData.map((data) => {
            return (
              <li key={data.key}>
                <Chip
                  className={classes.chip}
                  label={data.label}
                  onDelete={handleDelete(data)}
                />
              </li>
            );
          })}
        </Box>
        <Box>{getContent()}</Box>
      </Container>
    </Box>
  );
};

export default container(Home);
