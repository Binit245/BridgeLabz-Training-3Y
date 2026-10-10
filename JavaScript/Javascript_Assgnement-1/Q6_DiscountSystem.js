


let total = 6500;
let discountPercentage = 0;

if (total >= 10000) {
    discountPercentage = 25;
} else if (total >= 5000) {
    discountPercentage = 15;
} else if (total >= 2000) {
    discountPercentage = 5;
}

let discount = total * discountPercentage / 100;
let finalPrice = Math.round(total - discount);

console.log("Original Total: Rs. " + total);
console.log("Discount Percentage: " + discountPercentage + "%");
console.log("Discount Amount: Rs. " + discount);
console.log("Final Price: Rs. " + finalPrice);