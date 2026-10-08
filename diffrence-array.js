const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number separated by comma: ", (userInput) => {
 const numbersArray = userInput.split(',').map(str => Number(str.trim())).filter(num => !isNaN(num));

 const ascendingArray = [...numbersArray].sort((a, b) => a - b);

 const minNum = ascendingArray[0];
 const maxNum = ascendingArray[ascendingArray.length - 1];

 const diff = maxNum - minNum;

    console.log("Numbers array:", numbersArray);
    console.log("Ascending array:", ascendingArray);
    console.log("Minimum number:", minNum);
    console.log("Maximum number:", maxNum);
    console.log("Difference:", diff);

  rl.close();
});