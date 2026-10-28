
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (username.length < 5) {
        message.textContent = "Username must be at least 5 characters.";
        message.style.color = "red";
        return;
    }

    const passwordRegex =
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!passwordRegex.test(password)) {
        message.textContent =
            "Password needs 8 characters, uppercase, lowercase, number and special character.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Validation successful!";
    message.style.color = "green";
});
