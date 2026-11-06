
// Q10: Async Delivery Pipeline

// Common function to simulate an asynchronous step
function deliveryStep(stepName, successMessage) {

    return new Promise((resolve, reject) => {

        // Random delay between 1 and 2 seconds
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {

            // Random success or failure
            if (Math.random() > 0.2) {

                console.log(successMessage);
                resolve(stepName + " completed");

            } else {

                reject(stepName + " failed");

            }

        }, delay);

    });
}

// Step 1: Take Order
function takeOrder() {
    return deliveryStep(
        "Take Order",
        "Step 1: Order taken"
    );
}

// Step 2: Prepare Food
function prepare() {
    return deliveryStep(
        "Prepare",
        "Step 2: Food prepared"
    );
}

// Step 3: Pack Food
function pack() {
    return deliveryStep(
        "Pack",
        "Step 3: Package ready"
    );
}

// Step 4: Dispatch Order
function dispatch() {
    return deliveryStep(
        "Dispatch",
        "Step 4: Out for delivery"
    );
}

// Step 5: Deliver Order
function deliver() {
    return deliveryStep(
        "Deliver",
        "Delivery completed!"
    );
}

// Execute complete pipeline
async function runPipeline() {

    console.log("Start Pipeline");

    try {

        // Wait for each asynchronous step
        await takeOrder();

        await prepare();

        await pack();

        await dispatch();

        await deliver();

    } catch (error) {

        console.log("Pipeline failed!", error);

    }
}

// Start the pipeline
runPipeline();

/*
Explanation:

1. async makes the function asynchronous.
2. await waits for each Promise to settle.
3. The next step starts after the previous step succeeds.
4. If a Promise rejects, control moves to catch.
5. JavaScript event loop manages asynchronous callbacks.
6. Other synchronous code can execute while a step is waiting.
*/
