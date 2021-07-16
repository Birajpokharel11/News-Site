import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    marginTop: '1rem'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  }
});

export default function NewsItem(props) {
  const classes = useStyles();
  const { item } = props;

  const separateWords = (s) => s.replace(/[A-Z][a-z]+/g, '$& ').trim();
  const formatDate = (s) =>
    new Date(s).toLocaleDateString(undefined, { dateStyle: 'long' });

  return (
    <Grid item xs={12}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {formatDate(item.pubDate)}
            </Typography>
            {/* <Typography
              variant="subtitle1"
              paragraph
              dangerouslySetInnerHTML={{ __html: item.description }}
            /> */}
            <Typography
              variant="subtitle1"
              color="primary"
              component="a"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={item.media}
            title={item.title}
          />
        </Hidden>
      </Card>
    </Grid>
  );
}

NewsItem.propTypes = {
  post: PropTypes.object
};
