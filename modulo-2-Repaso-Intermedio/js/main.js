"use strict";

const face = document.querySelector(".js-face");
const userOption = document.querySelector(".js-option");
const btn = document.querySelector(".js-btn");
const background = document.querySelector(".js-main");

const updateFace = () => {
  const userChoice = userOption.value;
  face.innerHTML = userChoice;
};

const getRandomInt = () => {
  const randomNum = Math.floor(Math.random() * 100);
  return randomNum;
};

const updateColor = () => {
  const random = getRandomInt();
  if (random % 2 === 0) {
    background.classList.remove("orange");
    background.classList.add("yellow");
  } else {
    background.classList.remove("yellow");
    background.classList.add("orange");
  }
};

function handleClick(event) {
  event.preventDefault();
  updateFace();
  updateColor();
}

btn.addEventListener("click", handleClick);
