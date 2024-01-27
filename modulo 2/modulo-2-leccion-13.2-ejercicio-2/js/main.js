'use strict';

const userInput = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
const userName = document.querySelector('.js-name');
const userPic = document.querySelector('.js-img');
const repoNumber = document.querySelector('.js-number');

function getUser(event) {
    event.preventDefault();
    fetch('https://api.github.com/users/' + userInput.value)
      .then((response) => response.json())
      .then((data) => {
        const name = data.login;
        const src = data.avatar_url;
        const alt = 'Profile Pic';
        const repos = data.public_repos;
        userName.innerHTML = name;
        userPic.src = src;
        userPic.alt = alt;
        repoNumber.innerHTML = repos;
      });
  }

btn.addEventListener('click', getUser);