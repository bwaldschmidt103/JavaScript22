// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 

let lyrics = "";

for (let i = 99; i > 0; i--) {
    lyrics += `${i} bottle${i > 1 ? 's' : ''} of beer on the wall, ${i} bottle${i > 1 ? 's' : ''} of beer.<br>`;
    lyrics += `Take one down and pass it around, ${i - 1} bottle${i - 1 !== 1 ? 's' : ''} of beer on the wall.<br><br>`;
}

lyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>";
lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.<br>";

document.getElementById("beer").innerHTML = lyrics;


//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph

// Creating an array of months
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Initializing an empty string to hold the months
let monthList = "";

// Using the for...in loop to iterate over the array
for (let index in months) {
    monthList += months[index] + "<br>";
}

// Printing the months to the paragraph with ID 'for-in'
document.getElementById("for-in").innerHTML = monthList;


// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph

// Creating a string variable with at least 5 letters
let myString = "Halloween";

// Initializing an empty string to hold the letters
let letterList = "";

// Using the for...of loop to iterate over each letter in the string
for (let letter of myString) {
    letterList += letter + "<br>";
}

// Printing the letters to the paragraph with ID 'for-of'
document.getElementById("for-of").innerHTML = letterList;


// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph

// Initializing the starting number
let number = 1;

// Initializing an empty string to hold the numbers
let numberList = "";

// Using a while loop to iterate from 1 to 50
while (number <= 50) {
    numberList += number + "<br>";
    number++;
}

// Printing the numbers to the paragraph with ID 'while'
document.getElementById("while").innerHTML = numberList;