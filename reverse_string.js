const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string element: ", (userInput) => {
    const reverseStr = (str) => {
        return str.split('').reverse().join('');
    }

    console.log("Reversed string:", reverseStr(userInput));

    console.log("length of string:", userInput.length + ":" + reverseStr(userInput).length);
  rl.close();
});