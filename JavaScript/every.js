// Method: Array.prototype.every()

/* Definition: The every() method loops over an existing array and applies 
a callback function to each element, evaluating it against a conditional, 
if all least one element fails, the boolean false is returned, otherwise true. */


// Sample Data

const movieList = [
    { title: "the godfather", genre: "drama", year_released: 1972 },
    { title: "pulp fiction", genre: "drama", year_released: 1994 },
    { title: "heat", genre: "drama", year_released: 1994 },
    { title: "the predator", genre: "action", year_released: 2018 },
    { title: "iron fist", genre: "action", year_released: 2017 },
];


const horrorMovies = [
    { title: "it", genre: "horror", year_released: 2017, tags: [] },
    { title: "the exorcist", genre: "horror", year_released: 1973 },
    { title: "get out", genre: "horror", year_released: 2017 },
    { title: "the blair witch project", genre: "horror", year_released: 1999 },
    { title: "the conjuring", genre: "horror", year_released: 2013  },
]



// Create a function that iterates over the movieList and evaluates if each movie was created after the year 2000
function moviesReleasedIn(year) {
    return movieList.every(movie => movie.year_released > year);
}

// console.log(moviesReleasedIn(2000));

function isHorrorList(list) {
    return list.every(movie => movie.genre === 'horror');
}

console.log(isHorrorList(horrorMovies));

// Create a function that iterates over the horrorMovies list and evaluates if all the movies have the horror genre