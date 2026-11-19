
const menuItems = [
    { name: "Pizza", price: 200 },
    { name: "Burger", price: 100 },
    { name: "Pasta", price: 150 },
    { name: "Sandwich", price: 80 }
];

function calculateBill(orderItems) {
    // Get prices using map()
    const priceList = orderItems.map(item => {
        const menuItem = menuItems.find(
            menu => menu.name === item
        );

        if (!menuItem) {
            throw new Error("Invalid food item: " + item);
        }

        return menuItem.price;
    });

    // Calculate total using reduce()
    const total = priceList.reduce(
        (sum, price) => sum + price, 0
    );

    return total;
}

// Valid order
try {
    const bill = calculateBill(["Pizza", "Burger", "Pasta"]);
    console.log("Total Bill: Rs.", bill);
} catch (error) {
    console.log("Order Error:", error.message);
}

// Invalid order
try {
    const bill = calculateBill(["Pizza", "Sandwich", "Dosa"]);
    console.log("Total Bill: Rs.", bill);
} catch (error) {
    console.log("Order Error:", error.message);
}
