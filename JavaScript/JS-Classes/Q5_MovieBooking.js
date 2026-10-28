
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const message = document.getElementById("message");
    const ticket = document.getElementById("ticket");

    if (!nameRegex.test(name)) {
        message.textContent = "Name must contain only alphabets.";
        ticket.textContent = "";
        return;
    }

    if (!emailRegex.test(email)) {
        message.textContent = "Please enter a valid email.";
        ticket.textContent = "";
        return;
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        message.textContent = "Seats must be between 1 and 10.";
        ticket.textContent = "";
        return;
    }

    const booking = { name, email, seats };

    message.textContent = "Booking successful!";
    message.style.color = "green";

    ticket.textContent =
        `Name: ${booking.name} | Email: ${booking.email} | Seats: ${booking.seats}`;
});
