console.log("--- Task 2: Variables & Data Types ---");

// 1. Variable Declaration and Assignment using let and const
let userAge = 22; // let allows re-assignment
const country = "India"; // const cannot be re-assigned

console.log("Initial Age:", userAge);
userAge = 23; // Re-assigned
console.log("Updated Age:", userAge);
console.log("Country (const):", country);

// 2. Primitive Data Types
let textData = "JavaScript Course";       // String
let integerNumber = 45;                   // Number (Integer)
let floatingNumber = 99.75;               // Number (Float)
let isEnrolled = true;                    // Boolean
let unassignedVar;                        // undefined
let emptyValue = null;                    // null (intentional absence of value)

// 3. Checking Data Types using typeof Operator
console.log("\n--- Checking Data Types ---");
console.log("textData value:", textData, "| Type:", typeof textData);
console.log("integerNumber value:", integerNumber, "| Type:", typeof integerNumber);
console.log("floatingNumber value:", floatingNumber, "| Type:", typeof floatingNumber);
console.log("isEnrolled value:", isEnrolled, "| Type:", typeof isEnrolled);
console.log("unassignedVar value:", unassignedVar, "| Type:", typeof unassignedVar);
console.log("emptyValue value:", emptyValue, "| Type:", typeof emptyValue); // Note: returns 'object' in JS