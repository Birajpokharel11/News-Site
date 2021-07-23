import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Test from '../../../assets/img/image1.jpeg';
import Test2 from '../../../assets/img/image2.jpeg';
import Test3 from '../../../assets/img/image3.jpeg';
import Test4 from '../../../assets/img/image4.jpeg';
import Test5 from '../../../assets/img/image5.jpeg';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2.5rem',
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: 0
  },
  title1: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '29.8453px',
    lineHeight: '34px',
    color: '#000000'
  },
  subtitle1: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '13.9278px',
    lineHeight: '16px',
    color: '#999FAA'
  },
  title2: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '15.9175px',
    lineHeight: '18px',
    color: '#000000'
  },
  subtitle2: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '9.94844px',
    lineHeight: '11px',
    color: '#999FAA'
  },
  mediaLg: {
    height: 350,
    borderRadius: 16
  },
  mediaSm: {
    height: 165,
    borderRadius: 16
  }
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.mediaLg}
                image={Test}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title1}
                >
                  "London Black Lives Matter": peaceful Protest from Hyde Park
                  to Trafalgar Square via Buckingham Palace
                </Typography>
                <Typography className={classes.subtitle1}>
                  by Billy Jackson 16 hours ago
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item container md spacing={2}>
          <Grid item md={6}>
            <Card elevation={0}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaSm}
                  image={Test2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title2}
                  >
                    Elon musk reveals huge first test of starship rocket booster
                    built for mars
                  </Typography>
                  <Typography className={classes.subtitle2}>
                    by Billy Jackson 16 hours ago
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card elevation={0}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaSm}
                  image={Test3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title2}
                  >
                    Covid-19: PM and chancellor to self-isolate in U-turn
                  </Typography>
                  <Typography className={classes.subtitle2}>
                    by Billy Jackson 16 hours ago
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card elevation={0}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaSm}
                  image={Test4}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title2}
                  >
                    Anna Kendrick lands next lead role in Marvel star's new
                    movie
                  </Typography>
                  <Typography className={classes.subtitle2}>
                    by Billy Jackson 16 hours ago
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card elevation={0}>
              <CardActionArea>
                <CardMedia
                  className={classes.mediaSm}
                  image={Test5}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className={classes.title2}
                  >
                    Facebook Tells Biden: ‘Facebook Is Not the Reason’
                    Vaccination Goal Was Missed
                  </Typography>
                  <Typography className={classes.subtitle2}>
                    by Billy Jackson 16 hours ago
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default HeroSection;
