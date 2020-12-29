import ActorCard from "../components/ActorCard";
import Actor from "../model/Actor";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import { useState } from "react";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
      backgroundColor: "white",
      borderRadius: 14,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        backgroundColor: "white",
        borderRadius: 14,
        display: "inline",
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
        backgroundColor: "white",
        borderRadius: 14,
      },
      lable: {  
        backgroundColor: "white",
        borderRadius: 14,
        display: "inline",
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
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
      };

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

    function sortActors(e) {
        setCardsArr([]);
        cardsTempData = [];
        const sortSubject = e.target.value;
        console.log(sortSubject)
        if (sortSubject === "First name"){
            actorsData.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1)
        }
        else if (sortSubject === "Last name"){
            actorsData.sort((a, b) => (a.lastName > b.lastName) ? 1 : -1)
        }
        else if (sortSubject === "Age"){
            actorsData.sort((a, b) => (a.getAge() > b.getAge()) ? 1 : -1)
        }
        setCardsArr(actorsData);
    }

    return(
        <div>            
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Search.." onChange={filterActors}/>
            </form>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label" onChange={sortActors}>Sort</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                >
                <MenuItem value={10}>First name</MenuItem>
                <MenuItem value={20}>Last name</MenuItem>
                <MenuItem value={30}>Age</MenuItem>
                </Select>
            </FormControl>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {cardsArr}
            </Box>
        </div>
    )
}

export default ActorsGallery;