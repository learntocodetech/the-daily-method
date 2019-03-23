// Method: Array.prototype.some()

/* Definition: The some() method loops over an existing array and applies 
a callback function to each element, evaluating it against a conditional, 
if at least one element passes, the boolean true is returned, otherwise false. */


// Sample Data

const movies = [
    { title: "pulp fiction", genre: "drama", year_released: 1994 },
    { title: "heat", genre: "drama", year_released: 1994 },
    { title: "the predator", genre: "action", year_released: 2018 },
    { title: "iron fist", genre: "action", year_released: 2017 },
];




function hasMovieGenre(genre) {
    return movies.some(movie => movie.genre === genre);
}

function hasYearReleased(year) {
    return movies.some(movie => movie.year_released === year);
}

// console.log(hasMovieGenre('horror'));

console.log(hasYearReleased(1972));