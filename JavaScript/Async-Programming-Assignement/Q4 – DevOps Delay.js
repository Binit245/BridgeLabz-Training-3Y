
// Q4: Server Response Management

function serverA() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server A completed deployment");
            } else {
                reject("Server A failed!");
            }
        }, 2000);

    });
}

function serverB() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve("Server B completed deployment");
            } else {
                reject("Server B failed!");
            }
        }, 3000);

    });
}

// Promise.all() - Wait for both servers
Promise.all([serverA(), serverB()])
    .then((results) => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch((error) => {
        console.log("Deployment error:", error);
    });

// Promise.race() - First settled Promise wins
Promise.race([serverA(), serverB()])
    .then((result) => {
        console.log("Fastest response:", result);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });
