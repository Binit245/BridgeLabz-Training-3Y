// Q5: Image Gallery with Modal Preview

const gallery = document.getElementById("gallery");
const modal = document.getElementById("imageModal");
const modalContent = document.getElementById("modalContent");
const largeImage = document.getElementById("largeImage");
const closeButton = document.getElementById("closeModal");

gallery.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        largeImage.src = event.target.src;
        largeImage.alt = event.target.alt;
        modal.classList.remove("hidden");
    }
});

modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
});

closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});