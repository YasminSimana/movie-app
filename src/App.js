import './App.css';
import ActorsGallery from './pages/ActorsGallery';

function App() {
  // const actorsArr = [{
  //   firstName: "Jennifer",
  //   lastName: "Aniston",
  //   birthday: Date("1969-02-11"),
  //   image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
  //   IMDBLink: "https://www.imdb.com/name/nm0000098/",
  //   age: "66"
  // }];
  const actorsArr = [
    {
      firstName: "Jennifer",
      lastName: "Aniston",
      birthday: "1969-02-11",
      image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
      IMDBLink: "https://www.imdb.com/name/nm0000098/"
    },
    {
      firstName: "Courteney",
      lastName: "Cox",
      birthday: "1964-06-15",
      image: "https://m.media-amazon.com/images/M/MV5BMTA4OTczNDExNDNeQTJeQWpwZ15BbWU3MDUyNTIzMTM@._V1_UY317_CR7,0,214,317_AL_.jpg",
      IMDBLink: "https://www.imdb.com/name/nm0001073/"}
    // },
    // {
    //   firstName: "Jennifer",
    //   lastName: "Aniston",
    //   birthday: "1969-02-11",
    //   image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
    //   IMDBLink: "https://www.imdb.com/name/nm0000098/"
    // },
    // {
    //   firstName: "Jennifer",
    //   lastName: "Aniston",
    //   birthday: "1969-02-11",
    //   image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
    //   IMDBLink: "https://www.imdb.com/name/nm0000098/"
    // },
    // {
    //   firstName: "Jennifer",
    //   lastName: "Aniston",
    //   birthday: "1969-02-11",
    //   image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
    //   IMDBLink: "https://www.imdb.com/name/nm0000098/"
    // },
    // {
    //   firstName: "Jennifer",
    //   lastName: "Aniston",
    //   birthday: "1969-02-11",
    //   image: "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_UY317_CR3,0,214,317_AL_.jpg",
    //   IMDBLink: "https://www.imdb.com/name/nm0000098/"
    // }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <ActorsGallery actorsArr={actorsArr}/>
      </header>
    </div>
  );
}

export default App;
