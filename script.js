// Homework 1

const num1 = 1;
const num2 = 2;

// Homework 1.1
if (num1 < num2) console.log(`${num1} ნაკლებია ${num2}-ზე`);
// Homework 1.1

// Homework 1.2
if (num1 > num2) console.log(`${num2} ნაკლებია ${num1}-ზე`);
// Homework 1.2

// Homework 1.3
if (num1 === num2) console.log(`${num1} ტოლია ${num2}-ის`);
// Homework 1.3

// Homework 1.4
if (num1 !== num2) console.log(`${num1} არ უდრის ${num2}-ს`);
// Homework 1.4

// Homework 1

// Homework 2
let num3 = 33;

// num3 = 45;

// Homework 2.1
if (num3 > 10) console.log(`${num3} მეტია 10-ზე`);
// Homework 2.1

// Homework 2.2
if (num3 > 20) console.log(`${num3} მეტია 20-ზე`);
// Homework 2.2

// Homework 2.3
if (num3 > 30) console.log(`${num3} მეტია 30-ზე`);
// Homework 2.3

// Homework 2

// Homework 3
let num4 = 13;

// num4 = 15;

if (num4 % 3 == 0) {
  console.log(`${num4} იყოფა 3-ზე`);
} else if (num4 % 3 == 1) {
  console.log(`${num4}-ის 3-ზე გაყოფისას ნაშთი არის 1`);
} else if (num4 % 3 == 2) {
  console.log(`${num4}-ის 3-ზე გაყოფისას ნაშთი არის 2`);
}

//ES6
num4 % 3 == 0
  ? console.log(`${num4} იყოფა 3-ზე`)
  : num4 % 3 == 1
  ? console.log(`${num4}-ის 3-ზე გაყოფისას ნაშთი არის 1`)
  : num4 % 3 == 2
  ? console.log(`${num4}-ის 3-ზე გაყოფისას ნაშთი არის 2`)
  : "";

// Homework 3

// Homework 4
const str1 = "hello";

if (str1.length > 4) {
  console.log(`Length of str1 is Greater Than 4`);
} else {
  console.log(`Length of str1 is Less Than 4`);
}

//ES6
str1.length > 4
  ? console.log(`Length of str1 is Greater Than 4`)
  : console.log(`Length of str1 is Less Than 4`);

// Homework 4
