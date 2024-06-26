function login() {
    var fullName = document.getElementById('loginFullName').value;
    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    var apiEndpoint = 'https://run.mocky.io/v3/8fc2a660-f1a6-4f41-b574-63fd8c64a11e';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName: fullName, email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from login API:', data); // Log the response for debugging
        if (data.success) {
            window.location.href = 'https://usmgo.portfoliobox.net/loginsuccess';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}

function signup() {
    var fullName = document.getElementById('signupFullName').value;
    var email = document.getElementById('signupEmail').value;
    var password = document.getElementById('signupPassword').value;

    var apiEndpoint = 'https://run.mocky.io/v3/8fc2a660-f1a6-4f41-b574-63fd8c64a11e';

    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName: fullName, email: email, password: password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from signup API:', data); // Log the response for debugging
        if (data.success) {
            window.location.href = 'https://usmgo.portfoliobox.net/loginsuccess';
        } else {
            alert('Signup failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}
