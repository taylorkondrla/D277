document.getElementById('contactform').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var confirmEmail = document.getElementById('confirmEmail').value;

    if (email !== confirmEmail) {
        alert('Emails do not match. Please confirm your email address.');
        event.preventDefault(); // Prevent form submission
    }
});