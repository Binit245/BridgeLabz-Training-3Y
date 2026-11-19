
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Adding method using prototype
Product.prototype.applyDiscount = function(percent) {
    const discount = (this.price * percent) / 100;
    return this.price - discount;
};

// Creating 3 products
const product1 = new Product("Laptop", 50000);
const product2 = new Product("Mobile", 20000);
const product3 = new Product("Headphones", 3000);

// Applying different discounts
console.log(product1.name);
console.log("Original Price:", product1.price);
console.log("After 10% Discount:", product1.applyDiscount(10));

console.log("--------------------");

console.log(product2.name);
console.log("Original Price:", product2.price);
console.log("After 15% Discount:", product2.applyDiscount(15));

console.log("--------------------");

console.log(product3.name);
console.log("Original Price:", product3.price);
console.log("After 20% Discount:", product3.applyDiscount(20));

// Abstraction:
// Users only need to call applyDiscount().
// They don't need to calculate the discount manually.
