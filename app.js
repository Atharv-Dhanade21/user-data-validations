$(document).ready(function() {
    // Function to validate name
    function validateName(name) {
        const nameRegex = /^[a-zA-Z\s]{3,50}$/;
        return nameRegex.test(name);
    }

    // Function to validate password
    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
        return passwordRegex.test(password);
    }

    // Function to validate phone number
    function validatePhone(phone) {
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
    }

    // Function to validate email
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Function to validate address
    function validateAddress(address) {
        return address.trim().length >= 5;
    }

    // Show notification function
    function showNotification(message, isError = false) {
        const notification = $('#notification');
        notification.text(message);
        notification.removeClass('error');
        if (isError) {
            notification.addClass('error');
        }
        notification.fadeIn();

        // Automatically hide after 3 seconds
        setTimeout(() => {
            notification.fadeOut();
        }, 3000);
    }

    // Form submission handler
    $('#userForm').on('submit', function(event) {
        event.preventDefault();

        const name = $('#name').val().trim();
        const password = $('#password').val();
        const phone = $('#phone').val().trim();
        const email = $('#email').val().trim();
        const address = $('#address').val().trim();

        let isValid = true;

        // Validate name
        if (!validateName(name)) {
            $('#nameError').text('Name must be 3-50 characters long and contain only letters and spaces.').show();
            isValid = false;
        } else {
            $('#nameError').text('').hide();
        }

        // Validate password
        if (!validatePassword(password)) {
            $('#passwordError').text('Password must be at least 8 characters long and include uppercase, lowercase, digit, and special character.').show();
            isValid = false;
        } else {
            $('#passwordError').text('').hide();
        }

        // Validate phone
        if (!validatePhone(phone)) {
            $('#phoneError').text('Phone number must be exactly 10 digits.').show();
            isValid = false;
        } else {
            $('#phoneError').text('').hide();
        }

        // Validate email
        if (!validateEmail(email)) {
            $('#emailError').text('Enter a valid email address.').show();
            isValid = false;
        } else {
            $('#emailError').text('').hide();
        }

        // Validate address
        if (!validateAddress(address)) {
            $('#addressError').text('Address must be at least 5 characters long.').show();
            isValid = false;
        } else {
            $('#addressError').text('').hide();
        }

        if (isValid) {
            showNotification('Form submitted successfully!');
        } else {
            showNotification('Please correct the highlighted errors before submitting.', true);
        }
    });

    // Initially hide all error messages
    $('.error').hide();
});