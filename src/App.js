import './App.css';
import ActorsGallery from './pages/ActorsGallery';
import React, { useEffect } from 'react';
import Actor from './model/Actor';
import axios from 'axios';
import Movies from './pages/Movies';
import Movie from './model/Movie';

function App() {
 
  const [actorsArr, setActorsArr] = React.useState([]);
  const [moviesArr, setMoviesArr] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  

  useEffect(()=>{
    axios.get("actors.json").then(res=>{
      setActorsArr(res.data.map(plainActor => new Actor(plainActor)));
      setIsloading(false);
    });
  }, []);

  useEffect(()=>{
    axios.get("movies.json").then(res=>{
      setMoviesArr(res.data.map(plainMovie => new Movie(plainMovie)));
      setIsloading(false);
    });
  }, []);
  console.log(moviesArr)

  return (
    <div className="App">
      <header className="App-header">
        {/* {isLoading ? <div>loading...</div> :
        <ActorsGallery actorsArr={actorsArr}/>} */}
        <Movies movies={moviesArr}/>
       
      </header>
    </div>
  );
}

export default App;
