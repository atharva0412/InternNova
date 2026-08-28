// 1. Function Declaration with Parameters
function calculateSubtotal(price, quantity) {
    // 3. Return Values
    return price * quantity;
}

// 2. Arrow Function
const applyDiscount = (totalAmount, discountPercentage) => {
    const discount = totalAmount * (discountPercentage / 100);
    return totalAmount - discount;
};

// 4. Multiple Functions working together
function processOrder(itemPrice, itemCount, discountRate) {
    // Function Arguments passed here
    const subtotal = calculateSubtotal(itemPrice, itemCount); 
    const finalTotal = applyDiscount(subtotal, discountRate);
    
    return `Your subtotal is $${subtotal}. After a ${discountRate}% discount, your total is $${finalTotal.toFixed(2)}.`;
}

// Generating a greeting (Arrow function)
const generateGreeting = (customerName) => `Hello, ${customerName}! Here is your receipt:`;

// Execution
console.log(generateGreeting("Alice"));
console.log(processOrder(50, 3, 10)); // Price: 50, Qty: 3, Discount: 10%