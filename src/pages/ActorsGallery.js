import ActorCard from "../components/ActorCard";
import Actor from "../model/Actor";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
      backgroundColor: "white",
      borderRadius: 14,
    },
  },
}));

function ActorsGallery(props) {
    const {actorsArr} = props;
    const classes = useStyles();
    let actorsData = [];
    let cardsArr = [];
    for (let i of actorsArr) {
        let newActor = new Actor(i);
        actorsData.push(newActor);
        cardsArr.push(<ActorCard key={actorsArr.indexOf(i)} actor = {newActor}/>);
    }
   
    return(
        <div>            
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search.." />
            </form>
            <Box display="flex" justifyContent="center">
                {cardsArr}
            </Box>
        </div>
    )
}

export default ActorsGallery;