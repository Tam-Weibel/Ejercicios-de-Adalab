'use strict';

const hours = 24*365;
let age = 36;

const totalHours = age*hours;
console.log(totalHours);

const years = document.querySelector('.age');
years.innerHTML = age;



const total = document.querySelector('.total-hours');
total.innerHTML = ' ' + totalHours + ' ';