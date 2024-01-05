'use strict';

// elemento de HTML
const text = document.querySelector('.text');

// listener sobre el elemento, con tipo de evento y el código a ejecutarse
text.addEventListener('click', () => {
  text.innerHTML = text.innerHTML + 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique voluptatum, neque assumenda placeat sint doloribus iure, recusandae impedit quae possimus tempore nostrum dolores voluptate repellat consectetur quod ut molestias optio!';

});

