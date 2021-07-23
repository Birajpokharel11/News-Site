import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginBottom: '2%',
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: '17px'
  },
  cardMedia: {
    width: '392.75px',
    height: '241.84px',
    left: '265px',
    top: '1893px',
    borderRadius: '16.4454px'
  },

  cardcontent: {
    padding: '3%',
    height: '113.0642852782031px',
    width: '855.177124023435px',
    left: '704.2783203125px',
    top: '1944px',
    borderRadius: 'nullpx'
  },
  typography: {
    fontFamily: 'Ubuntu',
    fontSize: '31px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '35px',
    letterSpacing: '0em',
    textAlign: 'left'
  },
  author: {
    marginTow: '1000px',
    height: '16.445714950561523px',
    width: '199.40428161621094px',
    left: '703px',
    top: '2067.3428344726562px',
    color: '#999FAA'
  }
});

export default function NewsItem(props) {
  const classes = useStyles();
  const { item } = props;

  const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

  return (
      <Grid item>
    <Card className={classes.card}>
      {item.media && (
        <CardMedia
          className={classes.cardMedia}
          image={item.media}
          title={item.title}
        />
      )}

      <CardContent className={classes.cardcontent}>
        <Typography className={classes.typography} component="h2" variant="h5">
          {item.title}
        </Typography>

        {/* <Typography
              variant="subtitle1"
              paragraph
              dangerouslySetInnerHTML={{ __html: item.description }}
            /> */}
        <Typography
          variant="subtitle1"
          className={classes.author}
          color="primary"
          component="a"
        >
          by Billy Jackson {formatDate(item.pubDate)}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  );
}

NewsItem.propTypes = {
  post: PropTypes.object
};
