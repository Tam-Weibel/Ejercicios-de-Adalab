'use strict';
let counter = 0;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector('.time');
  if (counter < 59){
    time.innerHTML = 'Escrito hace ' + counter + ' seg';
  } else {
    time.innerHTML = 'Escrito hace más de 1 min';
  }
};

setInterval(incrementAndShowCounter, 1000);