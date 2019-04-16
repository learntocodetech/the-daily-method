// Method: Array.prototype.indexOf()
/* Definition: The indexOf() method accepts a required searchTerm as it's first parameter and an optional second parameter
which indicates a starting or fromIndex defaulting at 0. It loops over the invoked upon array returning the index value of the 
first match it finds. Otherwise, it will return -1 if the element does not exist within the array.. */


// Sample Data
const movies = [
    "Glass",
    "What Men Want",
    "Happy Death Day 2U",
    "Captain Marvel",
    "Aquaman",
    "Solo: A Star Wars Story",
    "Black Panther",
    "Blade Runner",
    "Captain Marvel",
    "Black Panther",
];


// General Examples
let movie = "Captain Marvel"
// console.log(movies.indexOf(movie, 4))

/* Example Problem 1: Create a function that accepts an array of movies, and a movie title.
It should add the movie to the list if it does not exist and return the updated list, or return a message indicating
that the movie is represetend in the list. */

function updateMovieList(movies, movie) {
    if (movies.indexOf(movie) === -1) {
        movies.push(movie)
        return movies
    } else {
        return 'Sorry, that movie already exist in the movie list.'
    }
}

// console.log(updateMovieList(movies, movie))


/* Example Problem 2: Create a function that uses the indexOf method to return
    all indices of a partiular element within an array */ 

function getAllIndicesOf(movies, movie) {
    let indices = []
    let idx = movies.indexOf(movie)

    if (idx === -1) {
        return "Sorry, that movie does not exist within the list."
    }

    while (idx != -1) {
        indices.push(idx)
        idx = movies.indexOf(movie, idx + 1)
    }

    return indices;
}


console.log(getAllIndicesOf(movies, movie))



