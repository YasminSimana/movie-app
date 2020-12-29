import ActorCard from "../components/ActorCard";
import Actor from "../model/Actor";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useState } from "react";

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
    let cardsTempData = [];
    for (let i of actorsArr) {
        let newActor = new Actor(i);
        actorsData.push(newActor);
        cardsTempData.push(<ActorCard key={actorsArr.indexOf(i)} actor = {newActor}/>);
    }

    const [cardsArr, setCardsArr] = useState(cardsTempData);

    function filterActors(e){
        setCardsArr([]);
        cardsTempData = [];
        for (let i of actorsData) {
            if (i.getFullName().toLowerCase().includes((e.target.value).toLowerCase())) {
                cardsTempData.push(<ActorCard key={actorsData.indexOf(i)} actor = {i}/>);
            }
        }
        setCardsArr(cardsTempData);
    }

    return(
        <div>            
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search.." onChange={filterActors}/>
            </form>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {cardsArr}
            </Box>
        </div>
    )
}

export default ActorsGallery;