// document.getElementById('btn-cashout').addEventListener('click', function () {
//     //1. get the agent number & validate
//     const cashoutNumberInput = document.getElementById('cashout-number');
//     const cashoutNumber = cashoutNumberInput.value;
//     if (cashoutNumber.length !== 11) {
//         alert('Invalid Agent number')
//         return;
//     }

//     //2. get the amount, validate
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;

//     //3. get the current balance,
//     const originalBalance = document.getElementById('balance');
//     const balanced = originalBalance.innerText;

//     //4. calculate new balance
//     const newBalance = Number(balanced) - Number(cashoutAmount)

//     if (newBalance < 0) {
//         alert('Invalid Balance')
//         return;
//     }

//     //5. get the pin and verify
//     const verifyPin = document.getElementById('input-pin-number');
//     const pin = verifyPin.value;
//     //5-1 = true show an alert > set balance
//     if (pin === '1234') {
//         alert('Cashout successful')
//         originalBalance.innerText = newBalance

//         //5-1 = false show an error alert > set balance
//     } else {
//         alert('invalid Pin')
//         return;
//     }
// })


document.getElementById('btn-cashout').addEventListener('click', function () {
    const cashoutNumber = document.getElementById('cashout-number');
    const cashoutNumberValue = cashoutNumber.value;
    if (cashoutNumberValue.length !== 11) {
        alert('Agent number Invalid');
        return;
    }

    const cashoutAmount = document.getElementById('cashout-amount');
    const cashoutAmountValue = cashoutAmount.value;

    const originalBalance = document.getElementById('balance');
    const balance = originalBalance.innerText;

    const newBalance = Number(balance) - Number(cashoutAmountValue)

    if (newBalance < 0) {
        alert('Invalid balance');
        return;
    }

    const cashoutPinNumber = document.getElementById('cashout-pin-number');
    const pinNumber = cashoutPinNumber.value;
    if (pinNumber === '1234') {
        alert('Cash out successful');
        originalBalance.innerText = newBalance;
        return;
    } else {
        alert('Invalid Pin');
        return;
    }


});
