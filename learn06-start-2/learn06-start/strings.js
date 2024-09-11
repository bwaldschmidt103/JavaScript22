function start() {

    // print your name to the name heading
    function printName() {
        let name = "Brian Waldschmidt";
        document.getElementById("name").innerHTML = name;
    }

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp
    // String length: calculate the string length and print to the length paragraph
    function calculateLength() {
        let text = "Be it ever so humble, there is no place like home.";
        let length = text.length;
        document.getElementById("length").innerHTML = text.length;
    }

    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    function printEscapeSequences() {
        let escapeText = "First line\nSecond line\tTabbed line\\Backslash";
        document.getElementById("escape").innerHTML = escapeText;
    }

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    function printFirstName() {
        let name = "Brian Waldschmidt";
        let firstName = name.slice(0, 5);
        document.getElementById("first").innerHTML = firstName;
    }

    // Use the Javascript substring Method to display your middle name to the middle paragraph
    function printMiddleName() {
        let name = "Brian Justin Waldschmidt";
        let middleName = name.substring(6, 12);
        document.getElementById("middle").innerHTML = middleName;
    }

    // Use the JavaScript subst Method to display your last name to the last paragraph
    function printLastName() {
        let name = "Brian Waldschmidt";
        let lastName = name.substr(6);
        document.getElementById("last").innerHTML = lastName;
    }


    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph
    function printMajor() {
        let major = "I'm majoring in Web Development at McHenry County College";
        let newMajor = major.replace("Web Development", "Front-End Development");
        document.getElementById("major").innerHTML = newMajor;
    }

    // convert the following variable to upper case then print to the upper paragraph
    function printUpperCase() {
        let myText = "It\'s a great day to be alive!";
        let upperText = myText.toUpperCase();
        document.getElementById("upper").innerHTML = upperText;
    }

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    function printTrimmedText() {
        let trimText = "                  McHenry County College                ";
        let trimmedText = trimText.trim();
        document.getElementById("trim").innerHTML = trimmedText;
    }

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph
    function printIndexOfMay() {
        let months = "January, February, March, April, May, June, July, August, September, October, November, December";
        let index = months.indexOf("May");
        document.getElementById("index").innerHTML = index;
    }

    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp
    // create a template literals for both your first and last name (name the variables first and last)
    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    function printGreeting() {
        let first = "Brian";
        let last = "Waldschmidt";
        let greeting = `Hello, my name is ${first} ${last}.`;
        document.getElementById("greeting").innerHTML = greeting;
    }

    // print to the index page
    printName();
    calculateLength();
    printEscapeSequences();
    printFirstName();
    printMiddleName();
    printLastName();
    printMajor();
    printUpperCase();
    printTrimmedText();
    printIndexOfMay();
    printGreeting();
}