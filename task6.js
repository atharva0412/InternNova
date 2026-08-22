console.log("--- Task 6: 5 Comprehensive Practice Programs ---");

// ==========================================================
// Program 1: Factorial Calculation of a Number
// Concepts used: Variables, Operators, for loop, Conditionals
// ==========================================================
console.log("\n--- Program 1: Factorial Calculator ---");
let targetNum = 5;
let factorialResult = 1;

if (targetNum < 0) {
  console.log("Factorial does not exist for negative numbers.");
} else {
  for (let i = 1; i <= targetNum; i++) {
    factorialResult *= i;
  }
  console.log("Factorial of " + targetNum + " is: " + factorialResult);
}

// ==========================================================
// Program 2: Prime Number Checker
// Concepts used: Variables, Boolean flags, for loop, Conditionals
// ==========================================================
console.log("\n--- Program 2: Prime Number Checker ---");
let candidatePrime = 29;
let isPrime = true;

if (candidatePrime <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(candidatePrime); i++) {
    if (candidatePrime % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(candidatePrime + " is a Prime Number.");
} else {
  console.log(candidatePrime + " is NOT a Prime Number.");
}

// ==========================================================
// Program 3: Fibonacci Series Generator up to N terms
// Concepts used: Variables, while loop, Arithmetic operations
// ==========================================================
console.log("\n--- Program 3: Fibonacci Series (First 8 Terms) ---");
let totalTerms = 8;
let term1 = 0;
let term2 = 1;
let termCounter = 1;

console.log("Fibonacci Series:");
while (termCounter <= totalTerms) {
  console.log("Term " + termCounter + ": " + term1);
  let nextTerm = term1 + term2;
  term1 = term2;
  term2 = nextTerm;
  termCounter++;
}

// ==========================================================
// Program 4: Electricity Bill Calculator
// Concepts used: Variables, Arithmetic, Multi-tier if-else conditions
// ==========================================================
console.log("\n--- Program 4: Tiered Electricity Bill Calculator ---");
let unitsConsumed = 230;
let billAmount = 0;

/*
  Slabs:
  - First 100 units: $1.50 per unit
  - Next 100 units (101-200): $2.50 per unit
  - Above 200 units: $4.00 per unit
*/
if (unitsConsumed <= 100) {
  billAmount = unitsConsumed * 1.50;
} else if (unitsConsumed <= 200) {
  billAmount = (100 * 1.50) + ((unitsConsumed - 100) * 2.50);
} else {
  billAmount = (100 * 1.50) + (100 * 2.50) + ((unitsConsumed - 200) * 4.00);
}

console.log("Units Consumed: " + unitsConsumed + " units");
console.log("Total Bill Amount: $" + billAmount.toFixed(2));

// ==========================================================
// Program 5: Sum of Digits of an Integer
// Concepts used: Variables, while loop, Modulus and Division
// ==========================================================
console.log("\n--- Program 5: Sum of Digits ---");
let initialInteger = 4825;
let remainingNumber = initialInteger;
let digitSum = 0;

while (remainingNumber > 0) {
  let lastDigit = remainingNumber % 10; // Extract last digit
  digitSum += lastDigit;                // Add to sum
  remainingNumber = Math.floor(remainingNumber / 10); // Remove last digit
}

console.log("The sum of digits of " + initialInteger + " is: " + digitSum);