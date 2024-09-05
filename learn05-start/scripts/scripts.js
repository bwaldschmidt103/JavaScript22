// Functions, objects, and events
// Functions, objects, and events

// Dog objects
const dog1 = {
    heading: "Bucket Case",
    image: "images/black-dog.jpg",
    caption: "Just hanging out waiting for water",
    altTag: "Black dog in bucket."
};

const dog2 = {
    heading: "Lazing Around",
    image: "images/gold-dog.jpg",
    caption: "I'm collecting the sun for later",
    altTag: "Golden Retriever in the grass."
};

const dog3 = {
    heading: "Dachshund vs Snowman",
    image: "images/snow-dog.jpg",
    caption: "Here I brought you a Christmas present",
    altTag: "Dachshund and Snowman on ice."
};

const dog4 = {
    heading: "Like father like son",
    image: "images/white-dogs.jpg",
    caption: "I love you dad",
    altTag: "Two dogs giving eskimo kisses."
};

function chooseDog(dog, button) {
    if (dog == 1) {
        loadMe(dog1, 1); //don't put dog1 in quotes or it will pass a string not the object
    } else if (dog == 2) {
        loadMe(dog2, 2);
    } else if (dog == 3) {
        loadMe(dog3, 3);
    } else {
        loadMe(dog4, 4);
    }
    // Hiding the button
    button.style.display = "none";
}

function loadMe(dog, dogNum) {
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);
}