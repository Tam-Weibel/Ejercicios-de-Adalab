'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPins = pins.filter((user) => user % 2 == 0);

console.log(evenPins);