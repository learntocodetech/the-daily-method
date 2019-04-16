// Method: Array.prototype.find()

/* Definition: The findIndex() method loops over an array instance and applies 
a callback function containing a conditional to each element. It will return 
the index of the first element that passes the condition, otherwise, it will return -1. */


// Sample Data

const movies = [
    { title: "Glass", genre: ['drama', 'sci-fi', 'thriller'], year_released: 2019 },
    { title: "What Men Want", genre: ['comedy', 'fantasy', 'romance'], year_released: 2019 },
    { title: "Happy Death Day 2U", genre: ['drama', 'horror', 'mystery'], year_released: 2019 },
    { title: "Captain Marvel", genre: ['action', 'adventure', 'sci-fi'], year_released: 2019 },
    { title: "Aquaman", genre: ['action', 'adventure', 'fantasy'], year_released: 2018 },
    { title: "Solo: A Star Wars Story", genre: ['action', 'adventure', 'fantasy'], year_released: 2018 },
    { title: "Black Panther", genre: ['action', 'adventure', 'sci-fi'], year_released: 2018 },
    { title: "Blade Runner", genre: ['action', 'adventure', 'sci-fi'], year_released: 2017 },
    { title: "Lady Bird", genre: ['comedy' , 'drama'], year_released: 2017 },
    { title: "Batman VS Superman: Dawn of Justice", genre: ['action', 'adventure', 'fantasy'], year_released: 2016 },
    { title: "The Jungle Book", genre: ['adventure', 'drama', 'family'], year_released: 2016 },
    { title: "sin city", genre: ['action', 'adventure', 'sci-fi'], year_released: 2005 },
    { title: "hostage", genre: ['action', 'crime', 'drama'], year_released: 2005 },
];


/* Example Problem 1: Create a function that returns a new array containing 
only movies released in the year 2017. */

function findIndexByTitle(title) {
   return movies.findIndex(movie => movie.title === title);
}

let movieTitle = "iron fist";
console.log(findIndexByTitle(movieTitle));