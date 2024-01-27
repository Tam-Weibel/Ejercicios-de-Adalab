'use strict';

let counter = 0;
let temp;
const time = document.querySelector('.time');
const stopBtn = document.querySelector('.stop');
const startBtn = document.querySelector('.start');

const incrementAndShowCounter = () => {
  counter++;
  time.innerHTML = counter + ' seg';
}

function handleStop(){
  clearInterval(temp);
  counter = 0;
  time.innerHTML = '0 seg';
}

function handleStart(){
  counter = 0;
  temp = setInterval(incrementAndShowCounter, 1000);
}

stopBtn.addEventListener('click', handleStop);
startBtn.addEventListener('click', handleStart);

temp = setInterval(incrementAndShowCounter, 1000)