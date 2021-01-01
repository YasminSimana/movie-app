//Movie model gets an object with strings for the actor details or array of objects
//name as the movie name
//length as the movie length in min
//poster as the movie poster
//director as the director of the movie
//starts as an array of starts names strings

class Movie {
    constructor (frstParam, length, poster, director, starts) {
        if (typeof frstParam === "object" && frstParam !== null) {
            this.name = frstParam.name;
            this.length = frstParam.length;
            this.poster = frstParam.poster;
            this.director = frstParam.director;
            this.starts = frstParam.starts;
        }
        else {
            this.firstName = frstParam;
            this.length = length;
            this.poster = poster;
            this.director = director;
            this.starts = starts;
        }
    }
}

export default Movie;