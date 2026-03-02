document.getElementById('btn-login').addEventListener('click', function () {
    //1. get the mobile number input
    const inputNumber = document.getElementById('input-number');
    const loginNumber = inputNumber.value;
    //2. get the pin input
    const inputPin = document.getElementById('input-pin');
    const loginPin = inputPin.value;

    //3.match pin and mobile number
    if (loginNumber === '01312121212' && loginPin === '1234') {
        alert('login successful');

        // window.location.replace("/homepage.html")
        window.location.assign("/homepage.html")

    } else {
        alert('login unsuccessful');
        return;
    }

})
