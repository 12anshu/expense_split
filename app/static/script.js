document.getElementById('expenseForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const description = document.getElementById('expenseDescription').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const numberOfPeople = parseInt(document.getElementById('numberOfPeople').value);

    if (numberOfPeople <= 0 || amount <= 0) {
        alert('Amount and number of people must be greater than zero');
        return;
    }

    const expense = {
        description: description,
        amount: amount,
        number_of_people: numberOfPeople
    };

    try {
        const response = await fetch('/expenses/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expense)
        });
        const result = await response.json();
        console.log('Expense added:', result);
        document.getElementById('result').innerHTML = `<p>Each person needs to pay: $${result.split_amount}</p>`;
        loadExpenses(); // Load the list of expenses after adding a new one
    } catch (error) {
        console.error('Error:', error);
    }
});

async function loadExpenses() {
    try {
        const response = await fetch('/expenses/');
        const expenses = await response.json();
        console.log('Loaded expenses:', expenses);
        const expenseList = document.getElementById('expenseList');
        expenseList.innerHTML = ''; // Clear the list before adding new items
        expenses.forEach(expense => {
            const listItem = document.createElement('li');
            listItem.textContent = `${expense.description} - $${expense.amount} - ${expense.number_of_people} people - Each pays: $${expense.split_amount}`;
            expenseList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Load the expenses when the page is loaded
window.onload = loadExpenses;
