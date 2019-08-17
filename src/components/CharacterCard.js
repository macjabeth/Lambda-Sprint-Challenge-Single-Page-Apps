import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: '35%',
    margin: 5
  },
  media: {
    height: 350
  }
});

const CharacterCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h3">
            {props.species} {props.gender}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Known origin is {props.origin.name}.
            Last located at {props.location.name}.
            Current status is {props.status}.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Episodes
        </Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
