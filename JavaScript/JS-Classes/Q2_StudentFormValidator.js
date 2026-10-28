
const form = document.getElementById("studentForm");

const validations = [
    {
        id: "name",
        errorId: "nameError",
        regex: /^[A-Za-z ]+$/,
        message: "Name must contain only alphabets."
    },
    {
        id: "email",
        errorId: "emailError",
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email address."
    },
    {
        id: "phone",
        errorId: "phoneError",
        regex: /^\d{10}$/,
        message: "Phone must contain exactly 10 digits."
    },
    {
        id: "password",
        errorId: "passwordError",
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
        message: "Include an uppercase letter, a number and a special character."
    }
];

validations.forEach(rule => {
    const input = document.getElementById(rule.id);

    input.addEventListener("input", () => {
        validateField(input, rule);
    });
});

function validateField(input, rule) {
    const error = document.getElementById(rule.errorId);
    const isValid = rule.regex.test(input.value);

    input.style.border = isValid ? "2px solid green" : "2px solid red";
    error.textContent = isValid ? "Valid" : rule.message;
    error.style.color = isValid ? "green" : "red";

    return isValid;
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const isFormValid = validations.every(rule => {
        return validateField(
            document.getElementById(rule.id),
            rule
        );
    });

    document.getElementById("result").textContent =
        isFormValid
            ? "Registration successful!"
            : "Please correct the errors.";

    document.getElementById("result").style.color =
        isFormValid ? "green" : "red";
});
