import React from 'react'
import MediaControlCard from '../components/MovieCard'

function MoviesGallery(props) {
    const {moviesArr} = props;

    let presMoviesArr = [];
    //movie.map(plainMovie => {<MediaControlCard movie={movie} />})
    // for (let i of movie){
    //     moviesArr.push(<MediaControlCard key={moviesArr.indexOf(i)} movie={i}/>)
    // }
    console.log("movie is ", moviesArr)

    for (let i of moviesArr){
        presMoviesArr.push(<MediaControlCard key={moviesArr.indexOf(i)} movie={i}/>)
    }

    return (
        <div>
            {/* <MediaControlCard movie={movie}/> */}
            {presMoviesArr}
        </div>
    )
}

export default MoviesGallery;