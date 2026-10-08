// Write a function that checks if a given number is prime. Name your function isprime.
// A function isprime checks if a number is divisible by any integer from 2 up to the square root of the number. If it finds one, it should return false. Here’s a potential implementation for this function:

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

rl.question("Enter a number to check if it's prime: ", (userInput) => {
    const number = parseInt(userInput.trim());
    const isPrime = (num) => {
        if (num <= 1) return false; // 0 and 1 are not prime numbers
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false; // Found a divisor, not prime
            }
        }
        return true; // No divisors found, it's prime
    };

    const result = isPrime(number);
    console.log(`Is ${number} a prime number? ${result}`);
    rl.close();
})