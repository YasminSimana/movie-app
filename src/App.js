import './App.css';
import ActorsGallery from './pages/ActorsGallery';
import React, { useEffect } from 'react';
import Actor from './model/Actor';
import axios from 'axios';
import Movie from './model/Movie';
import MoviesGallery from './pages/MoviesGallery';

function App() {
 
  const [actorsArr, setActorsArr] = React.useState([]);
  const [moviesArr, setMoviesArr] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  

  // useEffect(()=>{
  //   axios.get("actors.json").then(res=>{
  //     setActorsArr(res.data.map(plainActor => new Actor(plainActor)));
  //     setIsloading(false);
  //   });
  // }, []);

  useEffect(()=>{
    console.log("yasyas")
    axios.get("movies.json").then(res=>{
      console.log("res.data is ", res.data);
      setMoviesArr(res.data.map(plainMovie => new Movie(plainMovie)));
      setIsloading(false);
    });
  }, []);
  console.log("yyyy", moviesArr)
  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? <div>loading...</div> :
        <div>
          <MoviesGallery moviesArr={moviesArr}/>
          {/* <ActorsGallery actorsArr={actorsArr}/>} */}
        
        </div>}
        
       
      </header>
    </div>
  );
}

export default App;
