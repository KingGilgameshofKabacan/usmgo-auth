document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form inputs
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Replace the URL with your website page URL
    var redirectURL = 'https://example.com/signup-success';

    // Simulate form submission to your backend
    // Here you can send form data to your server for processing
    // For this example, we'll just redirect to the success page
    window.location.href = redirectURL;
  });
});
