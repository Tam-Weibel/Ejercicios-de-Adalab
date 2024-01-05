'use strict';

const firstDogImage =
  'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage =
  'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage =
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const dogList = document.querySelector('.list');
const content = `<li>${firstDogName}  <br /> <img src="${firstDogImage}" alt="perrito"> </li>` + `<li>${secondDogName}  <br /> <img src="${secondDogImage}" alt="perrito"></li>` + `<li>${thirdDogName}  <br /> <img src="${thirdDogImage}" alt="perrito"></li>`;

dogList.innerHTML = content;