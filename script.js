function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    const emailValue = emailInput.value;
    if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.textContent = '';
        checkSuccess();
    } else {
        emailError.textContent = 'Invalid email. Must contain "@" and "." and be more than 3 characters.';
        successMessage.textContent = '';
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    const passwordValue = passwordInput.value;
    if (passwordValue.length > 8) {
        passwordError.textContent = '';
        checkSuccess();
    } else {
        passwordError.textContent = 'Password must be more than 8 characters.';
        successMessage.textContent = '';
    }
}

function checkSuccess() {
    const emailError = document.getElementById('emailError').textContent;
    const passwordError = document.getElementById('passwordError').textContent;
    const successMessage = document.getElementById('successMessage');

    if (!emailError && !passwordError) {
        successMessage.textContent = 'All good to go!';
    }
}

function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    const confirmation = confirm("Are you sure you want to submit?");
    if (confirmation) {
        alert("Successful signup!");
    } else {
        document.getElementById('signupForm').reset();
        document.getElementById('emailError').textContent = '';
        document.getElementById('passwordError').textContent = '';
        document.getElementById('successMessage').textContent = '';
    }
}
