import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import fallbackImg from '../../assets/img/fallback_image.jpg';

import Test from '../../../assets/img/image1.jpeg';
import Test2 from '../../../assets/img/image2.jpeg';
import Test3 from '../../../assets/img/image3.jpeg';
import Test4 from '../../../assets/img/image4.jpeg';
import Test5 from '../../../assets/img/image5.jpeg';

const useStyles = makeStyles((theme) => ({
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
    height: 200,
    borderRadius: 16,
    [theme.breakpoints.up('sm')]: {
      height: 350
    }
  },
  mediaSm: {
    height: 200,
    borderRadius: 16,
    [theme.breakpoints.up('sm')]: {
      height: 165
    }
  }
}));

const HeroSection = ({ featureNewsIDs, news, loading }) => {
  const classes = useStyles();

  if (loading && !featureNewsIDs.length) {
    return <div></div>;
  }

  const getContent = () => {
    const list = featureNewsIDs.map((id) => news[id]);

    return (
      <Grid container spacing={2}>
        <Grid item md>
          <Card elevation={0}>
            <CardActionArea>
              <CardMedia
                className={classes.mediaLg}
                image={list[0].media ?? fallbackImg}
                title={list[0].title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title1}
                >
                  {list[0].title}
                </Typography>
                <Typography className={classes.subtitle1}>
                  by Billy Jackson 16 hours ago
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item container md spacing={2}>
          {list.slice(1, 5).map((item) => (
            <Grid item md={6} sm={6} xs={12}>
              <Card elevation={0}>
                <CardActionArea>
                  <CardMedia
                    className={classes.mediaSm}
                    image={item.media ?? fallbackImg}
                    title={item.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.title2}
                    >
                      {item.title}
                    </Typography>
                    <Typography className={classes.subtitle2}>
                      by Billy Jackson 16 hours ago
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };

  return <Paper className={classes.root}>{getContent()}</Paper>;
};

export default HeroSection;
