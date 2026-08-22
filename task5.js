console.log("--- Task 5: Loops ---");

// 1. for Loop: Print numbers from 1 to 10
console.log("\n1. Numbers from 1 to 10 (for loop):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. while Loop: Print even numbers between 1 and 20
console.log("\n2. Even numbers between 1 and 20 (while loop):");
let evenCounter = 2;
while (evenCounter <= 20) {
  console.log(evenCounter);
  evenCounter += 2;
}

// 3. for Loop with condition: Print odd numbers between 1 and 15
console.log("\n3. Odd numbers between 1 and 15 (for loop with if):");
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 4. do...while Loop: Multiplication table of 7
console.log("\n4. Multiplication table of 7 (do...while loop):");
let multiplier = 1;
const tableOf = 7;
do {
  console.log(tableOf + " x " + multiplier + " = " + (tableOf * multiplier));
  multiplier++;
} while (multiplier <= 10);

// 5. for Loop: Calculate sum of first 10 natural numbers
console.log("\n5. Sum of first 10 natural numbers:");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum (1 to 10) =", sum);

// 6. for Loop with decrement: Reverse numbers from 10 down to 1
console.log("\n6. Numbers in reverse order (10 to 1):");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}