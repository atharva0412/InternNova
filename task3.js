console.log("--- Task 3: Operators ---");

let a = 15;
let b = 4;

// 1. Arithmetic Operators
console.log("--- Arithmetic Operators ---");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division
console.log("a % b =", a % b); // Modulus (Remainder)
console.log("a ** b =", a ** b); // Exponentiation

// 2. Increment & Decrement Operators
console.log("\n--- Increment & Decrement ---");
let count = 10;
count++; // Increment by 1
console.log("count after count++ :", count);
count--; // Decrement by 1
console.log("count after count-- :", count);

// 3. Assignment Operators
console.log("\n--- Assignment Operators ---");
let x = 20;
x += 5; // x = x + 5
console.log("x += 5 :", x);
x -= 3; // x = x - 3
console.log("x -= 3 :", x);
x *= 2; // x = x * 2
console.log("x *= 2 :", x);
x /= 4; // x = x / 4
console.log("x /= 4 :", x);
x %= 3; // x = x % 3
console.log("x %= 3 :", x);

// 4. Comparison Operators
console.log("\n--- Comparison Operators ---");
let numA = 10;
let strA = "10";

console.log("numA == strA  (loose equality):", numA == strA);   // true
console.log("numA === strA (strict equality):", numA === strA); // false
console.log("numA != strA  (loose inequality):", numA != strA); // false
console.log("numA !== strA (strict inequality):", numA !== strA);// true
console.log("numA > 5   :", numA > 5);
console.log("numA < 20  :", numA < 20);
console.log("numA >= 10 :", numA >= 10);
console.log("numA <= 9  :", numA <= 9);

// 5. Logical Operators
console.log("\n--- Logical Operators ---");
let hasLicense = true;
let isSober = true;
let isTired = false;

console.log("hasLicense && isSober (AND):", hasLicense && isSober);
console.log("isSober || isTired (OR):", isSober || isTired);
console.log("!isTired (NOT):", !isTired);