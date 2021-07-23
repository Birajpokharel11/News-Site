import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: '17px',
    padding: 4,
    minHeight: 140
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 392,
    height: 241,
    borderRadius: 16
  },
  title: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '30px',
    lineHeight: '35px',
    color: '#000000'
  },
  subtitle: {
    fontFamily: 'Ubuntu',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14.39px',
    lineHeight: '17px',
    color: '#999FAA'
  }
});

export default function NewsItem(props) {
  const classes = useStyles();
  const { item } = props;

  const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

  const redirect = () => {
    // route to new page by changing window.location
    window.open(item.link, '_blank'); //to open new page
  };

  return (
    <Grid item>
      <Card className={classes.card}>
        <CardActionArea onClick={redirect} style={{ display: 'flex' }}>
          {item.media && (
            <CardMedia
              className={classes.cardMedia}
              image={item.media}
              title={item.title}
            />
          )}

          <div className={classes.cardDetails}>
            <CardContent style={{ height: '85%' }}>
              <Grid container alignItems="center" style={{ height: '100%' }}>
                <Typography className={classes.title}>{item.title}</Typography>
                <Typography className={classes.subtitle}>
                  by Billy Jackson {formatDate(item.pubDate)}
                </Typography>
              </Grid>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

NewsItem.propTypes = {
  post: PropTypes.object
};
