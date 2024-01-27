'use strict';

// elemento de HTML
let text = document.querySelector('.text');
const input = document.getElementById('name'); 
let inputValue = input.value;

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
input.addEventListener('keydown', () => {
  inputValue = event.currentTarget;
  console.log(text.innerHTML = `${inputValue}`); //código a ejecutarse 
});