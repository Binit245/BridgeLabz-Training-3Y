
// Q8: Order Retry Mechanism

// Function to submit order
function submitOrder() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // 50% chance of success
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully!");
            } else {
                reject("Order submission failed!");
            }

        }, 1000);

    });
}

// Process order with maximum 3 attempts
async function processOrder() {

    for (let attempt = 1; attempt <= 3; attempt++) {

        try {
            const result = await submitOrder();

            console.log(`Attempt ${attempt}: Success`);
            console.log(result);

            return;

        } catch (error) {

            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    // All three attempts failed
    throw new Error("Order could not be processed");
}

// Handle final result
async function main() {
    try {
        await processOrder();
    } catch (error) {
        console.log(error.message);
    }
}

main();
