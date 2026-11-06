// Q7: Detect Mouse Path and Coordinates

const trackingBox = document.getElementById("trackingBox");
const coordinates = document.getElementById("coordinates");

trackingBox.addEventListener("mousemove", (event) => {
    coordinates.textContent =
        "clientX: " + event.clientX +
        " | clientY: " + event.clientY;
});

trackingBox.addEventListener("dblclick", (event) => {
    const boxPosition = trackingBox.getBoundingClientRect();

    const x = event.clientX - boxPosition.left;
    const y = event.clientY - boxPosition.top;

    const redDot = document.createElement("span");

    redDot.className = "dot";
    redDot.style.left = x + "px";
    redDot.style.top = y + "px";

    trackingBox.appendChild(redDot);
});