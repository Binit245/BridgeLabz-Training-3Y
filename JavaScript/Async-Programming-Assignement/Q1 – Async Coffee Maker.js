
function boilWater() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 1: Water boiled successfully!");
                resolve();
            } else {
                reject("Failed to boil water!");
            }
        }, delay);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 2: Coffee brewed successfully!");
                resolve();
            } else {
                reject("Failed to brew coffee!");
            }
        }, delay);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log("Step 3: Coffee poured into cup!");
                resolve();
            } else {
                reject("Failed to pour coffee!");
            }
        }, delay);
    });
}

// Promise chaining
boilWater()
    .then(() => {
        return brewCoffee();
    })
    .then(() => {
        return pourCoffee();
    })
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation failed:", error);
    });
