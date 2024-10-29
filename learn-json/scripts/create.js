// Array to store contact objects
let contacts = [];

function addme() {
    // Get form values
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    // Create an object with form values
    let contact = {
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone
    };

    // Add the object to the array
    contacts.push(contact);

    // Stringify the object
    let jsonString = JSON.stringify(contact);

    // Display the JSON string on the page
    document.getElementById('json-value').innerText = jsonString;
}