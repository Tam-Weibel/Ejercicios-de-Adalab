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
  } else {
    user.newName = `Bienvenida ${user.name}`;
  }
}

const premiumUserNames = users.map(user => user.newName);

const premiumUsers = premiumUserNames.filter((user) => user.includes('Gracias'));

console.log(premiumUsers);