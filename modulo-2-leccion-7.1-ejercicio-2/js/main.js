'use strict';

// variables
const text = document.querySelector('.js-text');
const adalaber1 = {
    name: "Susana",
    age: "34",
    job: "periodista",
};

//methods
adalaber1.run = () => `Estoy corriendo.`;

adalaber1.runAMarathon = (distance) => `Estoy corriendo una maratón de ${distance} kilómetros.`;

//functions
console.log(adalaber1.run(""));
console.log(adalaber1.runAMarathon("300"))

