function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    let form = document.getElementById("myForm");
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let date = document.getElementById('date').value;
    let color = document.getElementById('color').value;
    let valid = true;

    // Basic validation checks
    if (name.trim() === "") {
        document.getElementById("name").classList.add("error");
        valid = false;
    } else {
        document.getElementById("name").classList.remove("error");
    }

    if (email.trim() === "" || !validateEmail(email)) {
        document.getElementById("email").classList.add("error");
        valid = false;
    } else {
        document.getElementById("email").classList.remove("error");
    }

    if (phone.trim() === "") {
        document.getElementById("phone").classList.add("error");
        valid = false;
    } else {
        document.getElementById("phone").classList.remove("error");
    }

    if (password.trim() === "") {
        document.getElementById("password").classList.add("error");
        valid = false;
    } else {
        document.getElementById("password").classList.remove("error");
    }

    if (age < 18) {
        document.getElementById("age").classList.add("error");
        valid = false;
    } else {
        document.getElementById("age").classList.remove("error");
    }

    if (gender === "") {
        document.getElementById("gender").classList.add("error");
        valid = false;
    } else {
        document.getElementById("gender").classList.remove("error");
    }

    if (date.trim() === "") {
        document.getElementById("date").classList.add("error");
        valid = false;
    } else {
        document.getElementById("date").classList.remove("error");
    }

    if (color.trim() === "") {
        document.getElementById("color").classList.add("error");
        valid = false;
    } else {
        document.getElementById("color").classList.remove("error");
    }

    if (valid) {
        // Form is valid, submit the form or perform further actions
        form.submit();
    } else {
        // Form is invalid, display error messages or handle as needed
        // You can also show a general error message instead of individual field errors
        alert("Please fill in all required fields correctly.");
    }
}

function validateEmail(email) {
    // Simple email validation using regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}