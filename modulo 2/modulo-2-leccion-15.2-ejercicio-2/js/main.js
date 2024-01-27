'use strict';

const list = document.querySelector('.js-list');
const section = document.querySelector('.js-section');
const selection = document.querySelector('.js-selector');
const cities = [
    "./img/madrid1.jpeg",
    "./img/madrid2.jpeg",
    "./img/madrid3.jpeg",
    "./img/paris1.jpeg",
    "./img/paris2.jpeg",
    "./img/paris3.jpeg",
    "./img/newyork1.jpeg",
    "./img/newyork2.jpeg",
    "./img/newyork3.jpeg",
]
const btn = document.querySelector('.js-btn');
const newImg1 = document.createElement('img');
const newImg2 = document.createElement('img');
const newImg3 = document.createElement('img');

function handleSubmit(event){
    event.preventDefault();
    console.log(selection.value);
    if (selection.value === '1'){
        newImg1.src = cities[0];
        newImg2.src = cities[1];
        newImg3.src = cities[2];
    } else if (selection.value === '2'){
        newImg1.src = cities[3];
        newImg2.src = cities[4];
        newImg3.src = cities[5];
    } else {
        newImg1.src = cities[6];
        newImg2.src = cities[7];
        newImg3.src = cities[8];
    }
    console.log(newImg1);
    section.appendChild(newImg1);
    section.appendChild(newImg2);
    section.appendChild(newImg3);
    console.log(section);
}

btn.addEventListener('click', handleSubmit);