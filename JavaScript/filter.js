// Method: Array.prototype.filter()

/* Definition: The filter() method loops over an existing array and applies 
a callback function to each element, evaluating it against a conditional, 
if the element is ‘truthy’ then it is returned within a new array. */


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

function filterMoviesByYear(year) {
   return movies.filter(movie => movie.year_released > year);
}


/* Example Problem 2: Create a function that returns a new array containing
only movies in the horror genre */

function filterMoviesByGenre(genre) {
    return movies.filter(movie => movie.genre === genre);
}

// console.log(filterMoviesByYear(2017));
console.log(filterMoviesByYear(2000));