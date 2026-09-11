// DOM Elements
const form = document.getElementById('expense-form');
const nameInput = document.getElementById('expense-name');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const filterInput = document.getElementById('filter-category');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');
const errorMsg = document.getElementById('error-msg');

// Array to hold expense objects
let expenses = [];

// Handle Form Submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categoryInput.value;

    // Validation: Ensure text isn't empty and amount is greater than 0
    if (name === '' || isNaN(amount) || amount <= 0) {
        errorMsg.classList.remove('hidden');
        return;
    }
    
    errorMsg.classList.add('hidden');

    // Create Expense Object
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };

    // Add to array and update UI
    expenses.push(newExpense);
    
    // Reset Form
    nameInput.value = '';
    amountInput.value = '';
    
    updateUI();
});

// Handle Filtering
filterInput.addEventListener('change', updateUI);

// Main function to render UI
function updateUI() {
    renderExpenses();
    updateTotal();
}

// Render list based on filter
function renderExpenses() {
    expenseList.innerHTML = ''; // Clear list
    
    const filterValue = filterInput.value;
    
    // Filter array based on dropdown selection
    const filteredExpenses = expenses.filter(expense => {
        if (filterValue === 'All') return true;
        return expense.category === filterValue;
    });

    // Create DOM elements for each expense
    filteredExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.className = 'expense-item';

        li.innerHTML = `
            <div class="expense-info">
                <strong>${expense.name}</strong>
                <span class="expense-category-badge">${expense.category}</span>
            </div>
            <div style="display: flex; align-items: center;">
                <span class="expense-amount">$${expense.amount.toFixed(2)}</span>
                <button class="delete-btn" onclick="deleteExpense(${expense.id})">X</button>
            </div>
        `;
        
        expenseList.appendChild(li);
    });
}

// Delete an expense
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateUI();
}

// Calculate and display total
function updateTotal() {
    // Use reduce to sum up all amounts in the array
    const total = expenses.reduce((accumulator, expense) => {
        return accumulator + expense.amount;
    }, 0);
    
    totalAmountDisplay.textContent = `$${total.toFixed(2)}`;
}