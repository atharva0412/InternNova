// 1. Creating Objects with Properties and Values
const product1 = { id: 101, name: "Laptop", price: 999 };
const product2 = { id: 102, name: "Mouse", price: 25 };
const product3 = { id: 103, name: "Keyboard", price: 75 };

// 2. Accessing Properties (Dot notation and bracket notation)
console.log(`Product 1 is a ${product1.name} costing $${product1["price"]}.`);

// 3. Updating Properties
product2.price = 20; 

// 4. Adding New Properties
product1.stock = 50;
product3.brand = "Logitech";

// 5. Removing Properties
delete product3.brand;

console.log("Updated Product 1:", product1);
console.log("Updated Product 2:", product2);
console.log("Updated Product 3:", product3);