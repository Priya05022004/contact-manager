document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let amount = parseFloat(document.getElementById('amount').value);
    let transactionType = document.getElementById('transactionType').value;
    let balanceElement = document.getElementById('balanceAmount');
    let currentBalance = parseFloat(balanceElement.textContent.slice(1)); // Remove '$' and parse as float
    
    if (transactionType === 'withdraw') {
        amount = -amount; // Negative amount for withdrawal
    }

    let newBalance = currentBalance + amount;
    
    if (newBalance < 0) {
        alert("Insufficient funds!");
        return;
    }

    balanceElement.textContent = '$' + newBalance.toFixed(2); // Update balance
    
    // Update transaction history
    let historyList = document.getElementById('historyList');
    let li = document.createElement('li');
    li.textContent = `${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}: $${amount.toFixed(2)}`;
    historyList.appendChild(li);

    // Clear form fields
    document.getElementById('amount').value = '';
});
