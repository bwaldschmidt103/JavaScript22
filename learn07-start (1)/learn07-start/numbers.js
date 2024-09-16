function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Brian Waldschmidt"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */

    function addNumberAndString() {
        let result = 15 + "100";
        document.getElementById("add").innerHTML = "15 + '100' = " + result;
    }

    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph

    function demonstrateToString() {
        let num = 248
        document.getElementById("to-string").innerHTML = num.toString();
    }

    // Demonstrate the use of toExponential() and print to the exponent paragraph

    function demonstrateToExponential() {
        let num = 33984753;
        document.getElementById("exponent").innerHTML = num.toExponential(2);
    }

    // Demonstrate the use of toFixed() and print to the fixed paragraph

    function demonstrateToFixed() {
        let num = 245423.342356;
        document.getElementById("fixed").innerHTML = num.toFixed(2);
    }

    // Demonstrate the use of toPrecision() and print to the precision paragraph

    function demonstrateToPrecision() {
        let num = 463.346;
        document.getElementById("precision").innerHTML = num.toPrecision(4);
    }

    // Demonstrate the use of parseFloat() and print to the float paragraph

    function demonstrateParseFloat() {
        let str = "453.335";
        document.getElementById("float").innerHTML = parseFloat(str);
    }

    // Demonstrate the use of parseInt() and print to the int paragraph

    function demonstrateParseInt() {
        let str = "8425.245";
        document.getElementById("int").innerHTML = parseInt(str);
    }

    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */

    function demonstrateEquals() {
        let myString = "Type Conversion: Converts the operands to the same type before making a comparison (If the same are equal than the result equals True)." +
            "No Type Conversion: Compares the value and the type of operand without any conversion (If they are different the result equals False)."
        document.getElementById("equals").innerHTML = myString;
    }

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators

    function demonstrateLogic() {
        let myString = "Logical NOT (!), has the highest precedence among all logical operators. Logical AND (&&), has the second highest precedence of the logical operators. Logical OR (||), has the lowest precedence among all logical oerators."
        document.getElementById("logic").innerHTML = myString;
    }

    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah

    function demonstrateSwitch() {
        let day = new Date().getDay();
        let dayName;
        switch (day) {
            case 0:
                dayName = "Sunday";
                break;
            case 1:
                dayName = "Monday";
                break;
            case 2:
                dayName = "Tuesday";
                break;
            case 3:
                dayName = "Wednesday";
                break;
            case 4:
                dayName = "Thursday";
                break;
            case 5:
                dayName = "Friday";
                break;
            case 6:
                dayName = "Saturday";
                break;
            default:
                dayName = "Unknown";
        }
        document.getElementById("switch").innerHTML = dayName;
    }

    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph

    function demonstrateTernary() {
        let age = 27;
        let canVote = (age >= 18) ? "Yes" : "No";
        document.getElementById("ternary").innerHTML = canVote;
    }

    // Call all functions
    addNumberAndString();
    demonstrateToString();
    demonstrateToExponential();
    demonstrateToFixed();
    demonstrateToPrecision();
    demonstrateParseFloat();
    demonstrateParseInt();
    demonstrateEquals();
    demonstrateLogic();
    demonstrateSwitch();
    demonstrateTernary();
}