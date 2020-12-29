import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    margin: 10
  },
  media: {
    height: 280,
  },
});

export default function ActorCard(props) {
    const {actor} = props;
    const classes = useStyles();

    return (
      
        <Card className={classes.root}>
        <CardActionArea>
            <a href={actor.IMDBLink} rel="noreferrer" target="_blank">
                <CardMedia
                className={classes.media}
                image={actor.image}
                title={actor.firstName + " " + actor.lastName}
                />
            </a>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {actor.firstName + " " + actor.lastName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Is now {actor.getAge()} years old
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
        
    );
}
