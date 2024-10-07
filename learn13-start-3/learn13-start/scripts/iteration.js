/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/

// List of comic books
const books = ["The Mighty Avengers", "The Uncanny X-Men", "The Fantastic Four", "The Justice League", "The Amazing Spiderman", "Tales of Suspense", "Tales to Astonish", "Journey into Mystery"];

// Getting the paragraph element where the list will be displayed
const listParagraph = document.getElementById("list");

// Iterating over the list of books and displaying them
books.forEach(book => {
    listParagraph.innerHTML += book + "<br>";
});



/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

// Creation of song titles
const songs = new Set(["Hotel California", "Glory of Love", "Solsbury Hill", "Wildflowers", "Walk of Life", "Rio", "The Killing Moon"]);

// Getting paragraph element where the list will be displayed
const setParagraph1 = document.getElementById("set1");

// Iterating over the set and displaying the contents
songs.forEach(song => {
    setParagraph1.innerHTML += song + "<br>";
});

// add two more songs to the set then display in the set2 paragraph
songs.add("Brown Eyed Girl");
songs.add("I Need Never Get Old");

// Getting the paragraph element where the updated set will be displayed
const setParagraph2 = document.getElementById("set2");

// Iterating over the updated set and displaying the contents
songs.forEach(song => {
    setParagraph2.innerHTML += song + "<br>";
});



/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/

// Creating a map with five names and emails
const contacts = new Map([
    ["Olivia Martinez", "olivia.martinez@aol.com"],
    ["Benjamin Young", "benjamin.young@yahoo.com"],
    ["James Lewis", "james.lewis@gmail.com"],
    ["Emily Clark", "emily.clark@comcast.net"],
    ["Sophia Walker", "sophia.walker@msn.com"]
]);

// Getting the paragraph element where the map contents will be displayed
const mapParagraph = document.getElementById("map1");

// Iterating over the map and displaying the contents
contacts.forEach((email, name) => {
    mapParagraph.innerHTML += `${name}: ${email}<br>`;
});

// add two new names and emails and display in map2 use the forEach() method
contacts.set("Sean Connery", "sean.connery@gmx.com");
contacts.set("Al Pacino", "al.pacino@zoho.com");

// Getting the paragraph element where the updated map contents will be displayed
const mapParagraph2 = document.getElementById("map2");

// Iterating over the updated map and displaying the contents
contacts.forEach((email, name) => {
    mapParagraph2.innerHTML += `${name}: ${email}<br>`;
});

// get and display the email of one person, display in map3

// Getting the paragraph element where the email will be displayed
const mapParagraph3 = document.getElementById("map3");

// Getting and displaying the email of one person
const email = contacts.get("Sean Connery");
mapParagraph3.innerHTML = `Sean Connery: ${email}`;