'use strict';
const btn = document.querySelector('.js-dog');
const littleBtn = document.querySelector('.js-little-dog');

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('.dog');
        img.src = data.message;
        img.alt = 'Un perro';
      });
  }

  function getChihuahua() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('.little-dog');
        img.src = data.message;
        img.alt = 'Un perro pequeño';
      });
  }

  btn.addEventListener('click', getDogImage);
  littleBtn.addEventListener('click', getChihuahua);