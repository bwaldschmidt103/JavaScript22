    // Global Variables
    //  global variables are declared with var
    //  local variables are declared wih let
    //  




    // myName = "Brian Waldschmidt" - Allowed but frowned upon

    function names() {
        var name = "Barik";
        var firstName = "Brian";
        var lastName = "Waldschmidt";
        var nickName = "BW";
        document.getElementById("name").innerHTML = name;
        document.getElementById("first").innerHTML = firstName;
        document.getElementById("full-name").innerHTML = firstName + " " + lastName;
        document.getElementById("nick-name").innerHTML = nickName;

    }

    function scope() {
        var firstName = "Brian";
        var lastName = "Waldschmidt";
        const taxRate = .07; // This is a constant
        var global = "Global Variable";
        var local = "Local Variable";
        var tax = taxRate;
        var newTax = taxRate * 2;
        document.getElementById("global").innerHTML = global;
        document.getElementById("local").innerHTML = local;
        document.getElementById("tax").innerHTML = tax;
        document.getElementById("newTax").innerHTML = newTax;
    }


    function letMe() {
        let dog1 = "Ollie";
        var dog2 = "Rugby"
        var dog3 = "Paisley";
        var dog4 = "Dobber";
        document.getElementById("dog1").innerHTML = dog1;
        document.getElementById("dog2").innerHTML = dog2;
        document.getElementById("dog3").innerHTML = dog3;
        document.getElementById("dog4").innerHTML = dog4;
    }


    function constants() {
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
        document.getElementById("subtraction").innerHTML = "52 - 36 = " + subtraction;

        let multiplication = 24 * 24
        document.getElementById("multiplication").innerHTML = "24 * 24 = " + multiplication;

        let exponent = 2 ** 3;
        document.getElementById("exponent").innerHTML = "2 ** 3 = " + exponent;

        let division = 45 / 9
        document.getElementById("division").innerHTML = "45 / 9 = " + division;

        let modulus = 222 % 4
        document.getElementById("modulus").innerHTML = "222 % 4 = " + modulus;

        let x = 10;
        let increment = ++x;
        document.getElementById("increment").innerHTML = "x++ = " + increment;

        let decrement = --x;
        document.getElementById("decrement").innerHTML = "x-- =" + decrement;
    }


    function assignments() {
        // create statements demonstrating the use of each assignment type
        let x = 10;
        document.getElementById("equals").innerHTML = "x = 10" + "x = " + x;

        x += 1;
        document.getElementById("plus-equals").innerHTML = "x += 1 " + x;

        x -= 6;
        document.getElementById("minus-equals").innerHTML = "x -= 6" + x;

        x *= 8;
        document.getElementById("times-equals").innerHTML = "x *= 8" + x;

        x /= 2;
        document.getElementById("divide-equals").innerHTML = "x /= 2, x = " + x;

        x %= 2;
        document.getElementById("modulus-equals").innerHTML = "x %= 2, x = " + x;

        x **= 2;
        document.getElementById("exponent-equals").innerHTML = "x **= 2, x = " + x;
    }

    function dataTypes() {
        // create samples of each of the data types from the
        // index page and display them in the Data Types section
        const teams = ["Blackhawks", "Cubs", "Bears"];
        document.getElementById("array").innerHTML = teams.join(", ");


    }