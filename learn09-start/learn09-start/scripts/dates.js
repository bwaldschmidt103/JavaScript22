/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
// display the variable in the basic paragraph

let basicDate = new Date();
document.getElementById("basic").innerHTML = basicDate;

// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)

let today = new Date();
let todayString = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
document.getElementById("today").innerHTML = todayString;

// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph

let birthday = new Date("1979-01-23");
document.getElementById("birthday").innerHTML = birthday;

// Convert your basic date to the ISO string format and display the result
// in the iso paragraph

let isoDate = basicDate.toISOString();
document.getElementById("iso").innerHTML = isoDate;

//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs

let date1 = basicDate.toDateString();
let date2 = basicDate.toUTCString();
let date3 = basicDate.toLocaleDateString();
document.getElementById("date1").innerHTML = date1;
document.getElementById("date2").innerHTML = date2;
document.getElementById("date3").innerHTML = date3;

//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs

let get1 = today.getFullYear();
let get2 = today.getMonth() + 1;
let get3 = today.getDate();
let get4 = today.getDay();
document.getElementById("get1").innerHTML = get1;
document.getElementById("get2").innerHTML = get2;
document.getElementById("get3").innerHTML = get3;
document.getElementById("get4").innerHTML = get4;

// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs

let setDate = new Date();
setDate.setFullYear(2025);
setDate.setMonth(11);
setDate.setDate(25);
setDate.setHours(10);
document.getElementById("set1").innerHTML = setDate.getFullYear();
document.getElementById("set2").innerHTML = setDate.getMonth() + 1;
document.getElementById("set3").innerHTML = setDate.getDate();
document.getElementById("set4").innerHTML = setDate.getHours();