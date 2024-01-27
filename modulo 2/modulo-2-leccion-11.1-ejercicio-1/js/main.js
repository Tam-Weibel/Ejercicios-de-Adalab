'use strict';

// Crea una función get100Numbers que devuelve un array con los números del 1 al 100. Como no nos apetece tener que escribir 100 números a mano, usaremos un bucle y el método push para ir guardándolos. Para comprobar que los tenemos todos, vamos a ejecutar la función y loguearlos (con console.log) uno a uno en la consola en orden.

const numbers =[];

const get100Numbers = () => {
    for (let i = 1; i <= 100; i++){
        if ((numbers.indexOf(i) === -1) && (i <= 100)){
            numbers.push(i);
          }
    }
}
get100Numbers();
console.log('normal: ' + numbers);

const getReversed100Numbers = () => {
    numbers.reverse();
    console.log('reversed: ' + numbers);
}

getReversed100Numbers();