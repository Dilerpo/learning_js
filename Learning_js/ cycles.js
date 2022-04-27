"use strict";

let num = 55;

while (num >= 23) {
    console.log(num);
    num--;
}

let num2 = 20;

do {
    console.log(num2);
    num2++;
}
while(num2 <= 25);

let num3 = 15;

for(let i = 1; i < 5; i++) {
    console.log(num3);
    num3++;
}


for(let i = 2; i <= 10; i++) {
    if(i === 3) {
        continue;
    }
    if(i === 5) {
        continue;
    }
    if(i === 7) {
        continue;
    }
    if(i === 9) {
        continue;
    }
    console.log(i);
}


for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;

while(i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    }else {
        console.log(i);
    }
}


function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}



let result = "";
const lengt = 7;

for (let i = 1; i < lengt; i++) {

    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += "\n";
}

console.log(result);