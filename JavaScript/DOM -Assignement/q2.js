// Q2: Live Character Counter

const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetButton = document.getElementById("resetButton");

const maxCharacters = 100;

function updateCounter() {
    const remaining = maxCharacters - message.value.length;

    counter.textContent = remaining + " characters remaining";

    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "yellow";
    } else {
        counter.style.color = "green";
    }
}

message.addEventListener("input", updateCounter);

message.addEventListener("keydown", (event) => {
    const allowedKeys = [
        "Backspace", "Delete", "ArrowLeft",
        "ArrowRight", "ArrowUp", "ArrowDown",
        "Tab", "Home", "End"
    ];

    if (
        message.value.length >= maxCharacters &&
        !allowedKeys.includes(event.key) &&
        !event.ctrlKey &&
        !event.metaKey
    ) {
        event.preventDefault();
    }
});

resetButton.addEventListener("click", () => {
    message.value = "";
    updateCounter();
});

updateCounter();