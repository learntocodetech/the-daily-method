// Method: Array.prototype.slice()

/* Definition: The slice() method accepts a zero-based numerical start and end value as its 
first and second parameters respectively. These values are used to extract & return a portion 
of the array containing shallow copied elements.
*/


// Sample Data

const movies = [
    { title: "it", genre: "horror", year_released: 2017  },
    { title: "the exorcist", genre: "horror", year_released: 1973 },
    { title: "get out", genre: "horror", year_released: 2017 },
    { title: "the blair witch project", genre: "horror", year_released: 1999 },
    { title: "iron fist", genre: "action", year_released: 1990 },
    { title: "the conjuring", genre: "horror", year_released: 2013  },
    { title: "the godfather", genre: "drama", year_released: 1972 },
    { title: "pulp fiction", genre: "drama", year_released: 1994 },
    { title: "heat", genre: "drama", year_released: 1994 },
    { title: "the predator", genre: "action", year_released: 2018 },
    { title: "iron fist", genre: "action", year_released: 2017 },
];


/* Example Problem: Create a function that sorts an array of movies by year
and returns a new array containing a portion of the movies released after the year 2000. 
*/

function sortMoviesByYear(movieList, sortType="asc") {
    switch(sortType) {
        case 'asc':
            return movieList.sort((a,b) => a.year_released - b.year_released);
        case 'desc':
            return movieList.sort((a,b) => b.year_released - a.year_released);
        default:
            return movieList;
    };
};

console.log(sortMoviesByYear(movies, 'desc'));

function getMoviesAfterYear(movieList, ) {
    let sortedMovies = sortMoviesByYear(movieList);
    sortedMovies.slice()
}

// console.log(getMoviesAfterYear(2000))