// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
function myFunction() {
    document.getElementById("test-function").innerHTML = "This is a test";
}


var name = "BW";


// myName = "Brian Waldschmidt" - Allowed but frowned upon

function names() {
    var name = "Barik";
    //fix the errors
    var firstName = "Brian",
        var lastName = "Waldschmidt";
    document.getElementById("name").innerHTML = name;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    document.getElementById("first").innerHTML = firstNamename;
    document.getElementById("nick-name").innerHTML = nick - name;

}

function scope() {
    //fix the errors
    var firstName = "Brian",
        var lastName = "Waldschmidt";
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = global;
    document.getElementById("local").innerHTML = local;
    document.getElementById("tax").innerHTML = tax;
    document.getElementById("newTax").innerHTML = newTax;
}


function letMe() {
    // Fix the errors
    let dog1 = "Ollie";
    var dog2 = "Rugby"
    var dog3 = "Paisley";
    var dog4;
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    document.getElementById("dog4").innerHTML = dog4;
}


function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breed = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breed;
}


function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 10 + 32
    document.getElementById("addition").innerHTML = "10 + 32 = " + addition;
    let subtraction = 52 - 36
    document.getElementById("subtraction").innerHTML = "52 - 36 = " - subtraction;
    let multiplication = 24 * 24
    document.getElementById("multiplication").innerHTML = "24 * 24 = " * multiplication;
    let division = 45 / 9
    document.getElementById("division").innerHTML = "45 / 9 = " / division;
    let modulus = 222 % 4
    document.getElementById("modulus").innerHTML = "222 % 4 = " % modulus;
    let increment = x++;
    document.getElementById("increment").innerHTML = "x++ ="++increment;
    let decrement = x--;
    document.getElementById("decrement").innerHTML = "x-- ="--decrement;
}


function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;
    x += 1
    document.getElementById("plus_equals").innerHTML = "x += 1 " + y;
    x -= 6
    document.getElementById("minus_equals").innerHTML = "x -= 6" - y;
    x *= 8
    document.getElementById("times_equals").innerHTML = "x *= 8" * y;
    x %= 2
    document.getElementById("divide_equals").innerHTML = "x %= 2" % y;
    x **= 12.5
    document.getElementById("modulus_equals").innerHTML = "x **= 12.5" ** y;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const teams = ["Blackhawks", "Cubs", "Bears"];
    document.getElementById("array").innerHTML = teams;


}