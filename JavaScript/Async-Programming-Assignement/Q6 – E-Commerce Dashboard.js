
// Q6: Fetch and Display Products

async function fetchProducts() {
    try {
        const response = await fetch(
            "https://fakestoreapi.com/products"
        );

        // Check API response
        if (!response.ok) {
            throw new Error("API request failed");
        }

        // Convert response into JSON
        const products = await response.json();

        console.log("Product Details:");

        // Display product information
        products.forEach((product) => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("---------------------------");
        });

        // Bonus: Create HTML product cards
        if (typeof document !== "undefined") {

            const container = document.getElementById("products");

            if (container) {
                products.forEach((product) => {

                    const card = document.createElement("div");

                    const title = document.createElement("h3");
                    title.textContent = product.title;

                    const price = document.createElement("p");
                    price.textContent = "$" + product.price;

                    const image = document.createElement("img");
                    image.src = product.image;
                    image.alt = product.title;
                    image.width = 120;

                    card.appendChild(image);
                    card.appendChild(title);
                    card.appendChild(price);

                    container.appendChild(card);
                });
            }
        }

    } catch (error) {
        console.log(
            "Failed to load products. Please try again."
        );
    }
}

// Call function
fetchProducts();
