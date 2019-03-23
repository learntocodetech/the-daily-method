// Method: Array.prototype.find()

/* Definition: The find() method loops over an array instance and applies 
a callback function containing a conditional to each element. It will return 
the first element that passes the condition, otherwise, it will return 0. */


// Sample Data

const movies = [
    { title: "it", genre: "horror", year_released: 2017  },
    { title: "the exorcist", genre: "horror", year_released: 1973 },
    { title: "get out", genre: "horror", year_released: 2017 },
    { title: "the blair witch project", genre: "horror", year_released: 1999 },
    { title: "the conjuring", genre: "horror", year_released: 2013  },
    { title: "the godfather", genre: "drama", year_released: 1972 },
    { title: "pulp fiction", genre: "drama", year_released: 1994 },
    { title: "heat", genre: "drama", year_released: 1994 },
    { title: "the predator", genre: "action", year_released: 2018 },
    { title: "iron fist", genre: "action", year_released: 2017 },
];


/* Example Problem 1: Create a function that returns a new array containing 
only movies released in the year 2017. */

function findMovieByGenre(genre) {
   return movies.find(movie => movie.genre === genre);
}


/* Example Problem 2: Create a function that returns a new array containing
only movies in the horror genre */

function findMovieByYear(year) {
    return movies.find(movie => movie.year_released === year);
}

// console.log(filterMoviesByYear(2017));
console.log(findMovieByYear(1994));