"use strict";

/*
// THEORY:

// while-loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do ... while - loop
// executes at least once and then checks if condition is (still) true
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// break statement
let sum = 0;

while (true) {
  let value = +prompt("Enter a number:");

  if (!value) break;

  sum = sum + value;
}

console.log(`Sum: ${sum}`);

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;

  console.log(i); //1, 3, 5, 7, 9
}

// labelName: for (...)
// break outer; works
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i}, ${j})`);
    if (!input) break outer;
  }
}

console.log("Done!");


// TASKS:

// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// Replace "for" with "while"
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// Repeat until the input is correct

let num;

do {
  num = prompt("Enter a number greater than 100:");
} while (num < 100 && num);

// Output prime numbers

for (let i = 2; i <= 30; i++) {
  if (i === 2) {
    console.log(i);
  } else if (i === 3) {
    console.log(i);
  } else if (i % 2 === 0 || i % 3 === 0 || i % 4 === 0) {
    continue;
  } else {
    console.log(i);
  }
}
*/
