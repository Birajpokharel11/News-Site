import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Test from '../../../assets/img/testjpg.jpg';
import Test2 from '../../../assets/img/logo2.jpg';
import Test3 from '../../../assets/img/logo3.jpg';
import Test4 from '../../../assets/img/logo4.jpg';
import Test5 from '../../../assets/img/logo5.jpg';

const useStyles = makeStyles(() => ({
  root: {
    padding: '2.5rem',
    boxShadow: '0px 4px 24px rgba(84, 95, 219, 0.25)',
    borderRadius: 0
  },
  media: {
    height: 140,
    borderRadius: 6
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
                className={classes.media}
                image={Test}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  "London Black Lives Matter": peaceful Protest from Hyde Park
                  to Trafalgar Square via Buckingham Palace
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
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
                  className={classes.media}
                  image={Test2}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Elon musk reveals huge first test of starship rocket booster
                    built for mars
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                  className={classes.media}
                  image={Test3}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Covid-19: PM and chancellor to self-isolate in U-turn
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                  className={classes.media}
                  image={Test4}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Anna Kendrick lands next lead role in Marvel star's new
                    movie
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
                  className={classes.media}
                  image={Test5}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Facebook Tells Biden: ‘Facebook Is Not the Reason’
                    Vaccination Goal Was Missed
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
