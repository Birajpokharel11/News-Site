import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { NewsItem } from '../../components';
import { HeroSection, CategorySection, SubscribeSection } from './components';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
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
  nested: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4)
    }
  },
  pagination: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16.4457px',
    lineHeight: '23px',
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#000000'
  },
  label: {
    textTransform: 'none'
  }
}));

const Home = (props) => {
  const classes = useStyles();

  const {
    news: { featureNewsIDs, newsIDs, news, loading },
    onFetchNewsStart,
    onNewsSubscribeStart
  } = props;

  const [rowsPerPage, setRowsPerPage] = useState(10);

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
  const [companies, setCompanies] = useState([...options1]);
  const [themes, setThemes] = useState([...options2]);

  useEffect(() => {
    search();
  }, []);

  useEffect(() => {
    search();
  }, [country, companies, themes]);

  const search = () => {
    onFetchNewsStart(
      country.filter((item) => item.selected)[0].value,
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
  };

  const toggleAllCompanies = (value) => {
    setCompanies((prev) => {
      return prev.map((option) => ({
        ...option,
        selected: value
      }));
    });
  };

  const toggleAllThemes = (value) => {
    setThemes((prev) => {
      return prev.map((option) => ({
        ...option,
        selected: value
      }));
    });
  };

  const scrollToTop = () => {
    const anchor = document.querySelector('#back-to-top');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getContent = () => {
    const list = newsIDs.map((id) => news[id]);
    if (loading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="30vh"
        >
          <CircularProgress />
        </Box>
      );
    }

    if (list.length === 0) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="30vh"
        >
          <Typography variant="h4">No results</Typography>
        </Box>
      );
    }

    return (
      <Grid
        container
        justifyContent="center"
        direction="column"
        spacing={4}
        className={classes.nested}
      >
        {list.slice(5, rowsPerPage).map((item) => (
          <NewsItem key={item.guid.text} item={item} />
        ))}
        <Grid item container justifyContent="space-between">
          <Typography variant="body2" color="textSecondary" component="p">
            1.535 results
          </Typography>
          <Button
            classes={{
              root: classes.pagination, // class name, e.g. `classes-nesting-root-x`
              label: classes.label // class name, e.g. `classes-nesting-label-x`
            }}
            onClick={handleChangePage}
            endIcon={<ArrowDownwardIcon />}
          >
            Show me more results
          </Button>
          <Button
            classes={{
              root: classes.pagination, // class name, e.g. `classes-nesting-root-x`
              label: classes.label // class name, e.g. `classes-nesting-label-x`
            }}
            onClick={scrollToTop}
            endIcon={<ArrowUpwardIcon />}
          >
            Go to Top
          </Button>
        </Grid>
      </Grid>
    );
  };

  const handleChangePage = () => {
    setRowsPerPage((prev) => prev + 10);
  };

  return (
    <>
      <HeroSection
        news={news}
        featureNewsIDs={featureNewsIDs}
        loading={loading}
      />
      <CategorySection
        country={country}
        companies={companies}
        themes={themes}
        handleClickCountry={handleClickCountry}
        handleClickCompanies={handleClickCompanies}
        handleClickThemes={handleClickThemes}
        toggleAllCompanies={toggleAllCompanies}
        toggleAllThemes={toggleAllThemes}
      />

      <Container id="back-to-top">{getContent()}</Container>
      <SubscribeSection onNewsSubscribeStart={onNewsSubscribeStart} />
    </>
  );
};

export default container(Home);
