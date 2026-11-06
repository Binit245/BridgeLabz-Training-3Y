// Q3: Multi-Step Form

const steps = document.querySelectorAll(".step");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const summary = document.getElementById("summary");

const fields = [
    document.getElementById("name"),
    document.getElementById("email"),
    document.getElementById("password")
];

let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => {
        step.classList.toggle("hidden", index !== currentStep);
    });

    backButton.disabled = currentStep === 0;
    nextButton.textContent = currentStep === 2 ? "Finish" : "Next";
}

function validateStep() {
    const field = fields[currentStep];
    const error = document.getElementById(field.id + "Error");

    let message = "";

    if (field.value.trim() === "") {
        message = "This field is required.";
    } else if (
        field.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
    ) {
        message = "Enter a valid email.";
    } else if (
        field.type === "password" &&
        field.value.length < 6
    ) {
        message = "Password must be at least 6 characters.";
    }

    error.textContent = message;
    return message === "";
}

nextButton.addEventListener("click", () => {
    if (!validateStep()) return;

    if (currentStep < 2) {
        currentStep++;
        showStep();
    } else {
        document.getElementById("multiStepForm").classList.add("hidden");
        summary.classList.remove("hidden");

        document.getElementById("summaryText").textContent =
            "Name: " + fields[0].value +
            "\nEmail: " + fields[1].value +
            "\nPassword: " + "*".repeat(fields[2].value.length);

        document.getElementById("summaryText").style.whiteSpace = "pre-line";
    }
});

backButton.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

fields.forEach((field) => {
    field.addEventListener("input", () => {
        document.getElementById(field.id + "Error").textContent = "";
    });
});

showStep();