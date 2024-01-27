'use strict';

const text = document.querySelector('.js-text');
const adalaber1 = {
    name: "Susana",
    age: "34",
    job: "periodista",
};
const adalaber2 = {
    name: "Rocío",
    age: "25",
    job: "actriz",
};
const phrase = 'Mi nombre es ' + adalaber2.name + ' y tengo ' + adalaber2.age + ' años y soy ' + adalaber2.job + '.';

text.innerHTML = phrase;