
// Q3: Bug Tracker using Promise

// Original callback-based function
function fetchBugs(callback) {
    setTimeout(() => {
        callback(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
}

// Convert callback into Promise
function getBugs() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const isSuccess = Math.random() > 0.3;

            if (isSuccess) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("Failed to fetch bugs from API!");
            }

        }, 1000);
    });
}

// Fetch and display bugs
getBugs()
    .then((bugs) => {
        console.log("Bugs fetched successfully:");
        
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
