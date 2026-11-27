
$(document).ready(function () {

    // Existing emails for uniqueness demonstration
    let existingEmails = [
        "admin@gmail.com",
        "test@gmail.com"
    ];

    $("#registrationForm").submit(function (event) {

        // Prevent default form submission
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

        let isValid = true;

        // Reset previous error styles
        $("input").css("border", "1px solid gray");

        $("#message").text("").css("color", "red");

        // 1. Validate name
        if (name === "") {

            $("#name").css("border", "2px solid red");

            isValid = false;

        }

        // 2. Validate email format
        let emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            $("#email").css("border", "2px solid red");

            isValid = false;

        }
        // Check email uniqueness
        else if (
            existingEmails.includes(email.toLowerCase())
        ) {

            $("#email").css("border", "2px solid red");

            $("#message").text("Email already exists!");

            isValid = false;

        }

        // 3. Validate password length
        if (password.length < 8) {

            $("#password").css("border", "2px solid red");

            isValid = false;

        }

        // Validate confirm password
        if (
            confirmPassword === "" ||
            confirmPassword !== password
        ) {

            $("#confirmPassword").css(
                "border", "2px solid red"
            );

            isValid = false;

        }

        // 4. Display success message
        if (isValid) {

            $("#message")
                .text("Registration Successful!")
                .css("color", "green");

            // Save email for duplicate checking during this session
            existingEmails.push(email.toLowerCase());

            // Reset form
            $("#registrationForm")[0].reset();

        } else {

            $("#message").text(
                "Please correct the highlighted fields."
            );

        }

    });

});
