'use strict'

const kiwis = 2*5;
const peras = 3*2;
const uvas = 0.5*4;
const total = kiwis+peras+uvas;
console.log(total);
const price = document.querySelector('.price');
price.innerHTML = total + ' ';