'use strict';

function getNumber() {
    fetch('https://api.rand.fun/number/integer?min=0&max=1000')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        document.querySelector('.js-result').innerHTML = data.result;
      });
  }
  document.querySelector('.js-number').addEventListener('click', getNumber);