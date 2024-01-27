'use strict';

// elemento de HTML
const button = document.querySelector('.button');
const text = document.querySelector('.text');
const inputValue = document.getElementById('name').value; 

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener('click', () => {
  console.log(text.innerHTML = `Hola ${inputValue} !`); //código a ejecutarse 
});