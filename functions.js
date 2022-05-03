"use strict";

let num = 20;

function showFunction (text) {
    console.log(text);
    num = 30;
}

showFunction("Hello Wrold!!!");
console.log(num);

function calc (a, b) {
    return(a * b);
}

console.log(calc(4, 12));
console.log(calc(5, 14));
console.log(calc(8, 19));

const usdCurs = (28);
const eurCurs = (32);
const discount = (0.6);

function convert(amount, curs) {
    return(curs * amount);
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurs));


function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello("Alex"));

function sayPrivet(name) {
    return `Привет, ${name}!`;
}

console.log(sayPrivet("Piter"));

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(10, 5));
