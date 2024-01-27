'use strict';

let fullName;
fullName = 'Leticia Fernández Sánchez';
const nameLength = fullName.length;

const nameElement = document.querySelector('.name');
nameElement.innerHTML = `${fullName}`;

const numberElement = document.querySelector('.total');
numberElement.innerHTML = `${nameLength}`;