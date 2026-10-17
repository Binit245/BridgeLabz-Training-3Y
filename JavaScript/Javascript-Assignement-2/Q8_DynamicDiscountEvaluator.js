
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart value
let totalCartValue = cart.reduce(
    (total, product) => total + product.price,
    0
);

let discountedTotal = 0;

// Apply category-wise discounts
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);

    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original = ₹${product.price}, ` +
        `Discount = ${discount}%, Final = ₹${finalPrice}`
    );
}

// Apply extra discount if discounted cart total exceeds ₹50,000
let extraDiscount = 0;

if (discountedTotal > 50000) {
    extraDiscount = discountedTotal * 5 / 100;
}

let finalTotal = discountedTotal - extraDiscount;

console.log("Original Cart Value: ₹" + totalCartValue);
console.log("Total After Category Discounts: ₹" + discountedTotal);
console.log("Extra Discount: ₹" + extraDiscount);
console.log("Final Cart Total: ₹" + finalTotal);
