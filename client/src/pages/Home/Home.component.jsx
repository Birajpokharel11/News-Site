import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
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
  { label: 'Digital Realty' },
  { label: 'China Telecom' },
  { label: 'NTT' },
  { label: 'KDDI Telehouse' },
  { label: 'Coresite' },
  { label: 'Verizon' },
  { label: 'Cyxtera' },
  { label: 'China Unicom' },
  { label: 'China Mobile' },
  { label: 'Amazon Web Services' },
  { label: '365 Data Centers' },
  { label: 'CyrusOne' },
  { label: 'GDS' },
  { label: 'Bridge Data Centres' },
  { label: 'Keppel DC' },
  { label: 'Global Switch' },
  { label: 'Lumen/CenturyLink' },
  { label: 'Flexential' },
  { label: 'Racks Central' },
  { label: 'Telstra' },
  { label: 'Singapore Technologies Telemedia' },
  { label: '1-Net' },
  { label: 'Microsoft' },
  { label: 'Facebook' },
  { label: 'Yondr' },
  { label: 'Vantage Data Centers' },
  { label: 'Vapor IO' },
  { label: 'QTS' },
  { label: 'NVIDIA' },
  { label: 'MegaPort' },
  { label: 'Iron Mountain' },
  { label: 'Google' },
  { label: 'EdgeConnex' },
  { label: 'EdgeCore' },
  { label: 'Evoque Data Centers' },
  { label: 'Compass Datacenters' },
  { label: 'Cologix' },
  { label: 'CapitaLand' }
];

const options2 = [
  { label: 'Sustainability' },
  { label: 'connectivity' },
  { label: 'technology' },
  { label: 'security' },
  { label: 'sovereignty' },
  { label: 'data protection' },
  { label: 'e-commerce' },
  { label: 'cloud' },
  { label: 'WAN' },
  { label: '5G' },
  { label: 'bandwidth' },
  { label: 'digital' },
  { label: 'telecommunication' },
  { label: 'telco' },
  { label: 'infrastructure' }
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
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
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
      return <Typography variant="h4">No results</Typography>;
    }

    return list.map((item) => <NewsItem key={item.guid.text} item={item} />);
  };

  return (
    <Box mt="1.5rem" style={{ backgroundColor: '#f8fbff', margin: '0' }}>
      <Container maxWidth="md">
        <Box mb="2rem">
          <Typography variant="h3">Market</Typography>
          <Card>
            <CardContent className={classes.chipContainer}>
              {country.map((option, index) => (
                <SelectedChip
                  key={option.value}
                  index={index}
                  label={option.label}
                  selected={option.selected}
                  onClick={handleClickCountry}
                />
              ))}
            </CardContent>
          </Card>
        </Box>
        <Box mb="2rem">
          <Typography variant="h3">Companies</Typography>
          <Card>
            <CardContent className={classes.chipContainer}>
              {companies.map((option, index) => (
                <SelectedChip
                  key={`companies-${index + 1}`}
                  index={index}
                  label={option.label}
                  selected={option.selected}
                  onClick={handleClickCompanies}
                />
              ))}
            </CardContent>
          </Card>
        </Box>
        <Box mb="2rem">
          <Typography variant="h3">Themes</Typography>
          <Card>
            <CardContent className={classes.chipContainer}>
              {themes.map((option, index) => (
                <SelectedChip
                  key={`themes-${index + 1}`}
                  index={index}
                  label={option.label}
                  selected={option.selected}
                  onClick={handleClickThemes}
                />
              ))}
            </CardContent>
          </Card>
        </Box>

        <Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={4}
          >
            {getContent()}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default container(Home);
