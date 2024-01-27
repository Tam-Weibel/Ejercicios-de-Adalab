'use strict';

const text = document.querySelector('.js-text');
const adalaber1 = {
    name: "Maria",
    age: "34",
    job: "periodista",
};
const adalaber2 = {
    name: "Rocío",
    age: "25",
    job: "actriz",
};
const adalaber = adalaber1;
const phrase = 'Mi nombre es ' + adalaber1.name + ' y tengo ' + adalaber1.age + ' años y soy ' + adalaber1.job + '.';

function showBio(){
    console.log(phrase);
}
showBio();

text.innerHTML = phrase;