
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");

nameInput.value = user.name;
emailInput.value = user.email;
ageInput.value = user.age;

function displayUser() {
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);
}

displayUser();

userForm.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = nameInput.value.trim();
    user.email = emailInput.value.trim();
    user.age = Number(ageInput.value);

    displayUser();
});
