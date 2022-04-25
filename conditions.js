"use strict";

if (4 < 3) {
    console.log("Yea");
} else {
    console.log("NINE!!!");
}

const num = 50;

if (num > 60) {
    console.log("Much");
} else if (num < 42) {
    console.log("MALO");
} else {
    console.log("Nine");
}

(num === 50) ? console.log("Ok!") : console.log("Nine!");

const age = 17;

switch (age) {
    case 13:
        console.log("False");
        break;
    case 49:
        console.log("False");
        break;
    case 17:
        console.log("True!");
        break;
    default:
        console.log("I don't now");
        break;
}