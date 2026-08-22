console.log("--- Task 4: Conditional Statements ---");

// 1. Check if a number is positive, negative, or zero (if...else if...else)
let testNumber = -8;
if (testNumber > 0) {
  console.log(testNumber + " is Positive.");
} else if (testNumber < 0) {
  console.log(testNumber + " is Negative.");
} else {
  console.log("The number is Zero.");
}

// 2. Check whether a number is even or odd
let checkNum = 27;
if (checkNum % 2 === 0) {
  console.log(checkNum + " is Even.");
} else {
  console.log(checkNum + " is Odd.");
}

// 3. Nested if: Checking voting eligibility based on age and citizenship
let candidateAge = 20;
let isCitizen = true;

if (candidateAge >= 18) {
  if (isCitizen) {
    console.log("Eligible to vote.");
  } else {
    console.log("Not eligible to vote: Must be a citizen.");
  }
} else {
  console.log("Not eligible to vote: Underage.");
}

// 4. Finding the greatest among three numbers using logical operators
let n1 = 45, n2 = 78, n3 = 32;
if (n1 >= n2 && n1 >= n3) {
  console.log("Greatest number is:", n1);
} else if (n2 >= n1 && n2 >= n3) {
  console.log("Greatest number is:", n2);
} else {
  console.log("Greatest number is:", n3);
}

// 5. Assigning grades based on marks
let marks = 84;
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A+";
} else if (marks >= 80 && marks < 90) {
  grade = "A";
} else if (marks >= 70 && marks < 80) {
  grade = "B";
} else if (marks >= 60 && marks < 70) {
  grade = "C";
} else if (marks >= 50 && marks < 60) {
  grade = "D";
} else if (marks >= 0 && marks < 50) {
  grade = "Fail";
} else {
  grade = "Invalid Marks";
}

console.log("Marks: " + marks + " | Grade: " + grade);