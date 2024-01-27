'use strict';

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];


  for (const user of users) {
    if (user.isPremium) {
      user.newName = `Bienvenida ${user.name}. Gracias por confiar en nosotros.`;
      console.log(user.newName);
    } else {
      user.newName = `Bienvenida ${user.name}`;
      console.log(user.newName);
    }
  }

console.log(users);

const premiumUserNames = users.map(user => user.newName);

console.log(premiumUserNames);

