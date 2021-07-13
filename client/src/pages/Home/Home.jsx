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

import { NewsItem } from '../../components';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

async function searchNews(country, company, themes) {
  const { data } = await axios.post('/api/v1/news/search', {
    country,
    company,
    themes
  });

  console.log(data);

  return data.items;
}

const Home = () => {
  const classes = useStyles();
  const [country, setCountry] = useState('SG');
  const [company, setCompany] = useState('Equinix');
  const [themes, setThemes] = useState('Sustainability');

  const [list, setList] = useState(null);

  useEffect(() => {
    searchNews(country, company, themes).then(setList);
  }, []);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeCompany = (event) => {
    setCompany(event.target.value);
  };

  const handleChangeTheme = (event) => {
    setThemes(event.target.value);
  };

  const search = () => {
    searchNews(country, company, themes).then(setList);
  };

  return (
    <Box mt="1.5rem">
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
                <MenuItem value="SG">Singapore</MenuItem>
                <MenuItem value="MY">Malaysia</MenuItem>
                <MenuItem value="ID">Indonesia</MenuItem>
                <MenuItem value="VN">Vietnam</MenuItem>
                <MenuItem value="KH">Cambodia</MenuItem>
                <MenuItem value="LA">Laos</MenuItem>
                <MenuItem value="MM">Myanmar(Burma)</MenuItem>
                <MenuItem value="HK">Hong Kong</MenuItem>
                <MenuItem value="CN">China</MenuItem>
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="KR">South Korea</MenuItem>
                <MenuItem value="JP">Japan</MenuItem>
                <MenuItem value="AU">Australia</MenuItem>
                <MenuItem value="NZ">New Zealand</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Companies
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={company}
                onChange={handleChangeCompany}
                label="Companies"
              >
                <MenuItem value="Equinix">Equinix</MenuItem>
                <MenuItem value="Digital Realty">Digital Realty</MenuItem>
                <MenuItem value="China Telecom">China Telecom</MenuItem>
                <MenuItem value="NTT">NTT</MenuItem>
                <MenuItem value="KDDI Telehouse">KDDI Telehouse</MenuItem>
                <MenuItem value="Coresite">Coresite</MenuItem>
                <MenuItem value="Verizon">Verizon</MenuItem>
                <MenuItem value="Cyxtera">Cyxtera</MenuItem>
                <MenuItem value="China Unicom">China Unicom</MenuItem>
                <MenuItem value="China Mobile">China Mobile</MenuItem>
                <MenuItem value="Amazon Web Services">
                  Amazon Web Services
                </MenuItem>
                <MenuItem value="365 Data Centers">365 Data Centers</MenuItem>
                <MenuItem value="CyrusOne">CyrusOne</MenuItem>
                <MenuItem value="GDS">GDS</MenuItem>
                <MenuItem value="Bridge Data Centres">
                  Bridge Data Centres
                </MenuItem>
                <MenuItem value="Keppel DC">Keppel DC</MenuItem>
                <MenuItem value="Global Switch">Global Switch</MenuItem>
                <MenuItem value="Lumen/CenturyLink">Lumen/CenturyLink</MenuItem>
                <MenuItem value="Flexential">Flexential</MenuItem>
                <MenuItem value="Racks Central">Racks Central</MenuItem>
                <MenuItem value="Telstra">Telstra</MenuItem>
                <MenuItem value="Singapore Technologies Telemedia">
                  Singapore Technologies Telemedia
                </MenuItem>
                <MenuItem value="1-Net">1-Net</MenuItem>
                <MenuItem value="Microsoft">Microsoft</MenuItem>
                <MenuItem value="Facebook">Facebook</MenuItem>
                <MenuItem value="Yondr">Yondr</MenuItem>
                <MenuItem value="Vantage Data Centers">
                  Vantage Data Centers
                </MenuItem>
                <MenuItem value="Vapor IO">Vapor IO</MenuItem>
                <MenuItem value="QTS">QTS</MenuItem>
                <MenuItem value="NVIDIA">NVIDIA</MenuItem>
                <MenuItem value="MegaPort">MegaPort</MenuItem>
                <MenuItem value="Iron Mountain">Iron Mountain</MenuItem>
                <MenuItem value="Google">Google</MenuItem>
                <MenuItem value="EdgeConnex">EdgeConnex</MenuItem>
                <MenuItem value="EdgeCore">EdgeCore</MenuItem>
                <MenuItem value="Evoque Data Centers">
                  Evoque Data Centers
                </MenuItem>
                <MenuItem value="Compass Datacenters">
                  Compass Datacenters
                </MenuItem>
                <MenuItem value="Cologix">Cologix</MenuItem>
                <MenuItem value="CapitaLand">CapitaLand</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Themes
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={themes}
                onChange={handleChangeTheme}
                label="Themes"
              >
                <MenuItem value="Sustainability">Sustainability</MenuItem>
                <MenuItem value="connectivity">connectivity</MenuItem>
                <MenuItem value="technology">technology</MenuItem>
                <MenuItem value="security">security</MenuItem>
                <MenuItem value="sovereignty">sovereignty</MenuItem>
                <MenuItem value="data protection">data protection</MenuItem>
                <MenuItem value="e-commerce">e-commerce</MenuItem>
                <MenuItem value="cloud">cloud</MenuItem>
                <MenuItem value="WAN">WAN</MenuItem>
                <MenuItem value="5G">5G</MenuItem>
                <MenuItem value="bandwidth">bandwidth</MenuItem>
                <MenuItem value="digital">digital</MenuItem>
                <MenuItem value="telecommunication">telecommunication</MenuItem>
                <MenuItem value="telco">telco</MenuItem>
                <MenuItem value="infrastructure">infrastructure</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={search}>
              Search
            </Button>
          </Grid>
        </Grid>

        <Box>
          {!list ? null : list.length === 0 ? (
            <p>
              <i>No results</i>
            </p>
          ) : (
            <ul>
              {list.map((item) => (
                <NewsItem key={item.guid} item={item} />
              ))}
            </ul>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
