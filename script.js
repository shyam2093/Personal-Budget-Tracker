let totalIncome = 0;
let totalExpenses = 0;
const expenses = [];

function addIncome() {
    const incomeInput = document.getElementById('incomeAmount');
    const incomeValue = parseFloat(incomeInput.value);
    if (!isNaN(incomeValue)) {
        totalIncome += incomeValue;
        incomeInput.value = '';
        updateSummary();
    }
}

function addExpense() {
    const categoryInput = document.getElementById('expenseCategory');
    const amountInput = document.getElementById('expenseAmount');
    console.log(expenses);
    const expenseValue = parseFloat(amountInput.value);
    const expenseCategory = categoryInput.value.trim();

    if (!isNaN(expenseValue) && expenseCategory) {
        totalExpenses += expenseValue;
        expenses.push({ category: expenseCategory, amount: expenseValue });
        categoryInput.value = '';
        amountInput.value = '';
        updateSummary();
        updateExpenseList();
    }
}

function updateSummary() {
    document.getElementById('totalIncome').innerText = totalIncome.toFixed(2);
    document.getElementById('totalExpenses').innerText = totalExpenses.toFixed(2);
    document.getElementById('balance').innerText = (totalIncome - totalExpenses).toFixed(2);
}

function updateExpenseList() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerText = `${expense.category}: Rs.${expense.amount.toFixed(2)}`;
        expensesList.appendChild(li);
    });
}
