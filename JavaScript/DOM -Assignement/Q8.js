// Q8: Custom Dropdown without select tag

const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", () => {
    options.classList.toggle("hidden");
});

options.addEventListener("click", (event) => {
    const selectedOption = event.target.closest("[data-value]");

    if (!selectedOption) return;

    dropdownButton.textContent = selectedOption.dataset.value;
    options.classList.add("hidden");
});

// Event capturing
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        options.classList.add("hidden");
    }
}, true);