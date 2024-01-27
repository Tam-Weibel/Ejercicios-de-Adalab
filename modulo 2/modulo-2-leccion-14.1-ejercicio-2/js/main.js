"use strict";

const userInput = document.querySelector(".js-input");
const btn = document.querySelector(".js-btn");
const characterName = document.querySelector(".js-name");
const characterGender = document.querySelector(".js-gender");

function getCharacter(event) {
  event.preventDefault();
  characterName.innerHTML = ""; // Clear previous content
  fetch("https://swapi.py4e.com/api/people/")
    .then((response) => response.json())
    .then((data) => {
      const people = data.results;

      for (const person of people) {
        if (person.name.toLowerCase().includes(userInput.value.toLowerCase())) {
          const name = person.name;
          const gender = person.gender;
          characterName.innerHTML += "name: " + name + "<br>" + " gender: " + gender + "<br> <br>";
        }
      }
    });
}

btn.addEventListener("click", getCharacter);

// function getCharacter(event) {
//   event.preventDefault();
//   fetch("https://swapi.py4e.com/api/people/")
//     .then((response) => response.json())
//     .then((people) => {
//         for (const person of people) {
//             if (person.name.includes(userInput)) {
//                 const name = person.name;
//                 const gender = person.gender;
//                 characterName.innerHTML += name;
//                 characterGender.innerHTML += gender;
//           }
//         }
//     });
// };
