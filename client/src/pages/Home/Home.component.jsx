import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { NewsItem } from '../../components';
import { HeroSection, CategorySection } from './components';

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

const useStyles = makeStyles(() => ({
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

    return list.slice(0, 10).map((item) => <NewsItem key={item.guid.text} item={item} />);
  };

  return (
    <>
      <HeroSection />
      <CategorySection
        country={country}
        companies={companies}
        themes={themes}
        handleClickCountry={handleClickCountry}
        handleClickCompanies={handleClickCompanies}
        handleClickThemes={handleClickThemes}
      />
      <Container>
        <Box>
          <Grid
              container
              justifyContent="center"
              direction="column"
              spacing={4}
          >
            {getContent()}
            <Grid item>
              <Typography className={classes.pagination}>
                Seemore result
              </Typography>
              <Typography className={classes.pagination}>
                Seemore result
              </Typography>
            </Grid>
          </Grid>
          {getContent()}
        </Box>
      </Container>
    </>
  );
};

export default container(Home);
