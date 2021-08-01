import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import fallbackImg from '../../../assets/img/fallback_image.jpg';

import { formatDate } from '../../../utils/misc';

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
  },
  actionArea: {
    '&:hover $focusHighlight': {
      opacity: 0
    }
  },
  focusHighlight: {}
}));

const HeroSection = ({ featureNews, news, loading }) => {
  const classes = useStyles();

  if (loading || !featureNews.length) {
    return <div></div>;
  }

  const redirect = (link) => {
    // route to new page by changing window.location
    window.open(link, '_blank'); //to open new page
  };

  const getContent = () => {
    return (
      <Grid container spacing={2}>
        <Grid item md>
          <Card elevation={0}>
            <CardActionArea
              component="div"
              disableRipple
              classes={{
                root: classes.actionArea,
                focusHighlight: classes.focusHighlight
              }}
              onClick={() => redirect(featureNews[0].link)}
            >
              <CardMedia
                className={classes.mediaLg}
                image={featureNews[0].media ?? fallbackImg}
                title={featureNews[0].title}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.title1}
                >
                  {featureNews[0].title}
                </Typography>
                <Typography className={classes.subtitle1}>
                  by {featureNews[0].source.text}{' '}
                  {formatDate(featureNews[0].pubDate)}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item container md spacing={2}>
          {featureNews.slice(1, 5).map((item) => (
            <Grid item md={6} sm={6} xs={12}>
              <Card elevation={0}>
                <CardActionArea
                  component="div"
                  disableRipple
                  classes={{
                    root: classes.actionArea,
                    focusHighlight: classes.focusHighlight
                  }}
                  onClick={() => redirect(item.link)}
                >
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
                      by {item.source.text} {formatDate(item.pubDate)}
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
