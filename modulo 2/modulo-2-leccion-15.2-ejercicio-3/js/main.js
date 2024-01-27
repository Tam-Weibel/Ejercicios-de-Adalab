"use strict";

const name = document.querySelector(".js-name");
const lastName = document.querySelector(".js-lastName");
const phone = document.querySelector(".js-phone");
const users = [
  {
    name: "Pepita",
    lastName: "Perez",
    phone: "11111",
  },
  {
    name: "Lore",
    lastName: "Lopez",
    phone: "22222",
  },
  {
    name: "Mirta",
    lastName: "Martinez",
    phone: "33333",
  },
];
const initial = document.createElement("option");
const defaultOption = document.createTextNode("--");
initial.appendChild(defaultOption);
name.appendChild(initial);

for (const eachUser of users) {
  const option = document.createElement("option");
  option.value = eachUser.name;
  const newOption = document.createTextNode(eachUser.name);
  option.appendChild(newOption);
  name.appendChild(option);
  console.log(option);
}

function renderInfo() {
  const selectedName = name.value;
  const selectedUser = users.find((user) => user.name === selectedName);
  if (selectedUser) {
    lastName.value = selectedUser.lastName;
    phone.value = selectedUser.phone;
  } else {
    lastName.value = "";
    phone.value = "";
  }
}

name.addEventListener("change", renderInfo);
