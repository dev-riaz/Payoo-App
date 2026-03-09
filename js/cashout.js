document.getElementById('withdraw-btn').addEventListener('click', function () {
    const agentNumber = document.getElementById('agent-number');
    const agentNumberValue = agentNumber.value;
    if (agentNumberValue.length !== 11) {
        alert('invalid Agent Number');
        return;
    }

    const cashoutAmount = document.getElementById('cashout-amount');
    const cashoutAmountValue = cashoutAmount.value;
    console.log(cashoutAmountValue);

    const correctBalance = document.getElementById('balance');
    const balance = correctBalance.innerText;
    console.log(balance);
    const newBalance = Number(balance) - Number(cashoutAmountValue);
    if (newBalance < 0) {
        alert('invalid Amount');
        return;
    }

    const cashoutPin = document.getElementById('cashout-pin');
    const cashoutPinValue = cashoutPin.value;
    if (cashoutPinValue === '1234') {
        alert('Withdraw Successful');
        console.log(newBalance);
        correctBalance.innerText = newBalance;

    } else {
        alert('invalid Pin')
        return;
    }
})
