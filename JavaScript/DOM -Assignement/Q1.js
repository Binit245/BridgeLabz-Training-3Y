// Q1: Dynamic Product List Manager

const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

let editingItem = null;
let editingInput = null;

function saveEdit() {
    if (!editingItem || !editingInput) return;

    const newName = editingInput.value.trim();

    if (newName) {
        editingItem.querySelector(".product-name").textContent = newName;
    }

    editingInput.remove();
    editingItem.querySelector(".product-name").classList.remove("hidden");

    editingItem = null;
    editingInput = null;
}

function addProduct() {
    const productName = productInput.value.trim();

    if (!productName) {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");

    const name = document.createElement("span");
    name.className = "product-name";
    name.textContent = productName;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.dataset.action = "edit";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.dataset.action = "delete";

    li.append(name, editButton, deleteButton);
    productList.appendChild(li);

    productInput.value = "";
}

addButton.addEventListener("click", addProduct);

productInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addProduct();
});

// Event delegation
productList.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (!action) return;

    const li = event.target.closest("li");

    if (action === "delete") {
        if (editingItem === li) {
            editingItem = null;
            editingInput = null;
        }
        li.remove();
    }

    if (action === "edit") {
        if (editingItem) saveEdit();

        const name = li.querySelector(".product-name");

        editingInput = document.createElement("input");
        editingInput.value = name.textContent;

        li.insertBefore(editingInput, name);
        name.classList.add("hidden");

        editingItem = li;
        editingInput.focus();

        editingInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") saveEdit();
        });
    }
});

// Auto-save on outside click
document.addEventListener("click", (event) => {
    if (editingItem && !editingItem.contains(event.target)) {
        saveEdit();
    }
});