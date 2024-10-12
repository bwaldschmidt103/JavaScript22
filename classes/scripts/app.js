class Star {
    constructor(name, type, luminosity, age) {
        this.name = name;
        this.type = type;
        this.luminosity = parseFloat(luminosity);
        this.age = age;
    }

    starStats() {
        return `This star is named ${this.name}, is of type ${this.type}, has a luminosity of ${this.luminosity}, and is ${this.age} old.`;
    }
    static totalLuminosity(star1, star2) {
        return star1.luminosity + star2.luminosity;
    }
}

const cx5 = new Star("Sirius", "Main Sequence (A1V)", "25.4", "approximately 242 million years");
const cx6 = new Star("Betelgeuse", "Red Supergiant (M1-2Ia-Iab)", "100000", "around 8.5 million years");

// Displaying star stats in paragraphs
document.getElementById('star1').innerText = cx5.starStats();
document.getElementById('star2').innerText = cx6.starStats();

// Creating two more star instances
const cx7 = new Star("Proxima Centauri", "Red Dwarf (M5.5Ve)", "0.0017", "approximately 4.85 billion years");
const cx8 = new Star("Vega", "Main Sequence (A0V)", "40", "around 455 million years");

document.getElementById('star3').innerText = cx7.starStats();
document.getElementById('star4').innerText = cx8.starStats();

console.log(cx5);
console.log(cx5.starStats());

console.log(cx6);
console.log(cx6.starStats());

const combinedLuminosity = Star.totalLuminosity(cx5, cx6);
console.log(`The combined luminosity of ${cx5.name} and ${cx6.name} is ${combinedLuminosity} times that of the Sun.`);