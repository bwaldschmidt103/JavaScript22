// Function for printing colored text
function printColored(text, color) {
    const colors = {
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        cyan: "\x1b[36m",
        reset: "\x1b[0m"
    };
    console.log(`${colors[color]}${text}${colors.reset}`);
}

// Random Number Generator
const targetNumber = Math.floor(Math.random() * 1000) + 1;
let attempts = 0;

console.log("Welcome to the Hot/Cold Guessing Game");
console.log("Guess the number, it is between 1 and 1,000.");

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askGuess() {
    readline.question("Enter your guess: ", (input) => {
        const guess = parseInt(input);
        attempts++;
        const difference = Math.abs(targetNumber - guess);

        if (guess === targetNumber) {
            printColored(`Congratulations! You've guessed the number in ${attempts} attempts.`, "green");
            readline.close();
        } else if (difference <= 10) {
            printColored("Hot!", "red");
            askGuess();
        } else if (difference <= 50) {
            printColored("Warm!", "yellow");
            askGuess();
        } else if (difference <= 100) {
            printColored("Cold!", "blue");
            askGuess();
        } else {
            printColored("Freezing!", "cyan");
            askGuess();
        }
    });
}

askGuess();