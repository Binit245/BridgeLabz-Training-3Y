// Q6: Real-Time Table Filter

const searchInput = document.getElementById("searchInput");
const studentRows = document.querySelectorAll("#studentRows tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase().trim();

    let visibleRows = 0;

    studentRows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchText)) {
            row.style.display = "";
            visibleRows++;
        } else {
            row.style.display = "none";
        }
    });

    noResults.classList.toggle("hidden", visibleRows !== 0);
});