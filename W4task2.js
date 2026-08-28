// 1. Creating Arrays
let courses = ["HTML", "CSS", "JavaScript"];

// 2. Accessing Array Elements
console.log("First course:", courses[0]); 

// 3. Adding Elements
courses.push("React"); // Adds to the end
courses.unshift("Git"); // Adds to the beginning

// 4. Removing Elements
courses.pop(); // Removes "React" from the end
courses.shift(); // Removes "Git" from the beginning

// 5. Updating Elements
courses[1] = "Tailwind CSS"; // Changes "CSS" to "Tailwind CSS"

// 6. Basic Array Methods (splice to insert in the middle)
courses.splice(1, 0, "Python"); // Inserts Python at index 1 without removing anything

// 7. Iterating through Arrays
console.log("--- Current Course List ---");
courses.forEach((course, index) => {
    console.log(`${index + 1}. ${course}`);
});