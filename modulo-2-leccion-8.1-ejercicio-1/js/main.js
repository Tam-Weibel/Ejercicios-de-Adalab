'use strict';

const movies = [
    "Jaws",
    "Fargo",
    "Clerks",
];

// movies[3] = "Frozen";
// console.log(movies);

// movies[0] = "Spirited away";
// console.log(movies);

function workWithMovies(){
    movies[3] = "Frozen";
    movies[0] = "Spirited away";
    console.log(movies);
};

workWithMovies();