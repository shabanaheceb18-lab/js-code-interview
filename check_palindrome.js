const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string element: ", (userInput) => {
    const isPalindrome = (str) => {
        const cleanedStr = str.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
        return cleanedStr === cleanedStr.split('').reverse().join('');
    }

    console.log("Is palindrome:", isPalindrome(userInput));

  rl.close();
});

// A man, a plan, a canal: Panama