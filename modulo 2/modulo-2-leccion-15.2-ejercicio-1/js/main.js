'use strict';

const list = document.querySelector('.js-list');
const numbers = [1, 2, 3];


for(let i=0; i < numbers.length; i++) {
    const newListItem = document.createElement('li');
    const newContent = document.createTextNode(numbers[i]);
    newListItem.appendChild(newContent);
    list.appendChild(newListItem);
}
console.log(list);

