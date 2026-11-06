// Q9: Form Submit Blocker with Live Errors

const registrationForm = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");

const successMessage = document.getElementById("successMessage");

const fields = [
    { input: fullName, errorId: "fullNameError" },
    { input: userEmail, errorId: "userEmailError" },
    { input: userPassword, errorId: "userPasswordError" }
];

function validateField(input) {
    let errorMessage = "";

    if (input.value.trim() === "") {
        errorMessage = "This field is required.";
    } else if (
        input === userEmail &&
        !input.value.includes("@")
    ) {
        errorMessage = "Email must contain @.";
    } else if (
        input === userPassword &&
        input.value.length < 6
    ) {
        errorMessage = "Password must be at least 6 characters.";
    }

    const field = fields.find(item => item.input === input);

    document.getElementById(field.errorId).textContent = errorMessage;

    return errorMessage === "";
}

// Live validation
fields.forEach(({ input }) => {
    input.addEventListener("input", () => {
        validateField(input);
        successMessage.textContent = "";
    });
});

// Form submission
registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const isValid = fields
        .map(({ input }) => validateField(input))
        .every(Boolean);

    if (isValid) {
        successMessage.textContent =
            "Form Submitted Successfully";

        registrationForm.reset();

        fields.forEach(({ errorId }) => {
            document.getElementById(errorId).textContent = "";
        });
    } else {
        successMessage.textContent = "";
    }
});