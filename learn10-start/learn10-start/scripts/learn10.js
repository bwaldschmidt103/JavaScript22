function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    let num = 5.67;
    document.getElementById("round").innerText = Math.round(num);
    document.getElementById("ceil").innerText = Math.ceil(num);
    document.getElementById("floor").innerText = Math.floor(num);
    document.getElementById("trunc").innerText = Math.trunc(num);
    document.getElementById("sign").innerText = Math.sign(num);
    document.getElementById("pow").innerText = Math.pow(num, 2);
    document.getElementById("min").innerText = Math.min(3, 5, 7, 2, 8);
    document.getElementById("random").innerText = Math.random();

    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph

    let randomInt = Math.floor(Math.random() * 100) + 1;
    document.getElementById("random2").innerText = randomInt;

    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph

    let a = "5";
    let b = 5;
    document.getElementById("comparisons").innerText =
        `a == b: ${a == b} (true because == does type coercion)\n` +
        `a == b: ${a === b} (false because === checks both value and type)`;

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
}