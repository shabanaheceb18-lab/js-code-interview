// Write a function sumArray(arr) that returns the sum of all the elements in an input array.
// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// function sumArray(arr) {
//     return arr.reduce((acc, currentvalue) => acc + currentvalue, 0);
// }

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter numbers separated by commas: ", (userInput) => {
  const numbersArray = userInput
    .split(',')
    .map(str => Number(str.trim()))
    .filter(num => !isNaN(num));

  const total = numbersArray.reduce((acc, currentvalue) => acc + currentvalue, 0);

  console.log("Array:", numbersArray);
  console.log("Sum:", total);

  rl.close();
});