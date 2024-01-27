'use strict';

// elemento de HTML
const button = document.querySelector('.button');

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
button.addEventListener('click', () => {
  // Si contiene la clase hidden
  if (button.classList.contains('green')) {
    // Elimina la clase
    button.classList.remove('green');
  } else {
    // Si no, en caso contrario
    // Añade la clase hidden
    button.classList.add('green');
  }
});

