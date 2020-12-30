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
import SimpleSelect from "../model/SelectBox";
import "./ActorsGallery.css";


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

//Page component that receives actors items type array
//Presenr them as cards
//Allowing fillter by name and sorting by fname, lname and age
//props = actorsArr - hold array of actors
//state = filterBy - hold the string we wish to filter by
//state = sortBy - hold the method we wish to sort by
function ActorsGallery(props) {
    const classes = useStyles();

    const {actorsArr} = props;
    const [filterBy, setFilterBy] = useState("");
    const [sortBy, setSortBy] = useState("firstName");

    //convert data to presentation!

    const filteredActors = actorsArr.filter(actor=>
        actor.getFullName().toLowerCase().includes((filterBy).toLowerCase()));
    
    if (sortBy !== "age") {
        filteredActors.sort((a, b) => (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) ? 1 : -1)
    }
    else {
        filteredActors.sort((a, b) => (a.getAge() > b.getAge()) ? 1 : -1)
    }
    
    console.log(filteredActors);
    let cardsArr = [];
    for (let i of filteredActors){
        cardsArr.push(<ActorCard key={actorsArr.indexOf(i)} actor={i}/>)
    }

    return(
        <div>    
            <div className="p-act-gal">
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Search.." value={filterBy} onChange={e=>setFilterBy(e.target.value)}/>
                </form>  
                {/* <SimpleSelect handleSortChange={sortActors}/>     */}
                <select className="select" value={sortBy} onChange={e=>setSortBy(e.target.value)}>
                    <option value="firstName">first name</option>
                    <option value="lastName">last name</option>
                    <option value="age">age</option>
                </select>
                
            </div>  
            <Box display="flex" justifyContent="center" flexWrap="wrap">
                {cardsArr}
            </Box>
        </div>
    )
}

export default ActorsGallery;