'use strict';

const marks = [5, 4, 6, 7, 9];
const betterMarks = (mark) => mark+1;
const inflatedMarks = marks.map(betterMarks);

console.log('these were the initial marks: ' + marks);
console.log('these were the inflated marks: ' + inflatedMarks);