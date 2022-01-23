// Iteration 1: Names and Input

const hacker1 = 'André';

console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Chrome';
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(`equal ${hacker2.length} characters`);
}

// Iteration 3: Loops
//Iteration 3.1

let hacker1Upper = hacker1.toUpperCase();
let hacker1Space = hacker1Upper.split('').join(' ');

console.log(hacker1Space);

//iteration 3.2

let nameBackwards = '';

for (let i = hacker1.length - 1; i >= 0; i--) {
  nameBackwards += hacker1[i];
}

console.log(nameBackwards);

//iteration 3.3

let driverFirstLetter = hacker1[0];
let navFirstLetter = hacker2[0];
let comparisonLetter = driverFirstLetter.localeCompare(navFirstLetter);

switch (comparisonLetter) {
  case -1:
    console.log("The driver's name goes first");
    break;

  case 1:
    console.log('To, the navigator goes first definitely');
    break;
  case 0:
    console.log('What?! You both have the same name?');
    break;
}
