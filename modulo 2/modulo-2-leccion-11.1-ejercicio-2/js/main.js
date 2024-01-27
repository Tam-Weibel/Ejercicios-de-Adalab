'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
let lostEven = [];

const bestLostNumber = () => {
    for (const number of lostNumbers) {
        console.log('lost numbers: ' + number);
        if ((number % 2 == 0) && (lostNumbers.length <= 6)){
            lostEven = lostNumbers.push(number);
        }
    }
    console.log('lost even numbers: ' + lostEven);
}

bestLostNumber();

// const bestAnimatedFeature2016Nominees = [
//     'Zootopia',
//     'Kubo and the Two Strings',
//     'La tortue rouge',
//     'Ma vie de Courgette',
//     'Moana',
//   ];
  
  // bucle for
//   for (let i = 0; i < bestAnimatedFeature2016Nominees.length; i++) {
//     console.log(
//       `"${bestAnimatedFeature2016Nominees[i]}" was nominated to 89th Academy Awards`
//     );
//   }
  
  // bucle for...of
//   for (const movie of bestAnimatedFeature2016Nominees) {
//     console.log(`"${movie}" was nominated to 89th Academy Awards`);
//   }