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
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: '17px'
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
    fontSize: '31px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '35px',
    letterSpacing: '0em'
  },
  author: {
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

        <div className={classes.cardDetails}>
          <CardContent>
            <Typography className={classes.title} component="h2" variant="h5">
              {item.title}
            </Typography>

            {/* <Typography
              variant="subtitle1"
              paragraph
              dangerouslySetInnerHTML={{ __html: item.description }}
            /> */}
            <Typography variant="subtitle1" className={classes.author}>
              by Billy Jackson {formatDate(item.pubDate)}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

NewsItem.propTypes = {
  post: PropTypes.object
};
