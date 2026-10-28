
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)(\d{1,2})$/;
        const match = coupon.match(couponRegex);

        if (!match) {
            console.log("Invalid coupon format.");
            return this.getTotal();
        }

        const discountPercent = Number(match[2]);

        if (discountPercent < 1 || discountPercent > 100) {
            console.log("Coupon discount must be between 1% and 100%.");
            return this.getTotal();
        }

        const total = this.getTotal();
        const discount = total * discountPercent / 100;

        console.log(`Coupon applied: ${discountPercent}% off`);
        return total - discount;
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Cart Total: ₹" + cart.getTotal());

const coupon = "SAVE20";

const finalTotal = cart.applyCoupon(coupon);

console.log("Final Total: ₹" + finalTotal);
