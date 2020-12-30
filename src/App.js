import './App.css';
import ActorsGallery from './pages/ActorsGallery';
import React from 'react';
import Actor from './model/Actor';

function App() {
 
  const [actorsArr, setActorsArr] = React.useState([
    new Actor(
      "Jennifer", 
      "Aniston",
      "1969-02-11",
      "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
      "https://www.imdb.com/name/nm0000098/"
    ),
    new Actor(
      "Courteney",
      "Cox",
      "1964-06-15",
      "https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_UY317_CR7,0,214,317_AL_.jpg",
      "https://www.imdb.com/name/nm0001073/"
    ),
    new Actor(
      "David",
      "Schwimmer",
      "1966-11-02",
      "https://m.media-amazon.com/images/M/MV5BMTQ2Mjg5ODIzNF5BMl5BanBnXkFtZTgwNjIwMjI0ODE@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "https://www.imdb.com/name/nm0001710/"
    ),
    new Actor(
      "Matthew",
      "Perry",
      "1969-02-11",
      "https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_UY317_CR17,0,214,317_AL_.jpg",
      "https://www.imdb.com/name/nm0001612/"
    ),
    new Actor(
      "Lisa",
      "Kudrow",
      "1963-07-30",
      "https://m.media-amazon.com/images/M/MV5BMTU5OTA0ODcxNl5BMl5BanBnXkFtZTcwMjE3NjQxMw@@._V1_UY317_CR8,0,214,317_AL_.jpg",
      "https://www.imdb.com/name/nm0001435/"
    ),
    new Actor(
      "Matt",
      "LeBlanc",
      "1967-07-25",
      "https://m.media-amazon.com/images/M/MV5BODQ0NTI0OTk0M15BMl5BanBnXkFtZTcwMDk2MDg5Nw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
      "https://www.imdb.com/name/nm0001455/"
    )
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <ActorsGallery actorsArr={actorsArr}/>
      </header>
    </div>
  );
}

export default App;
