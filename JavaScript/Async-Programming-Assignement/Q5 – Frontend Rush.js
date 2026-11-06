
// Q5: Callback Hell vs Async/Await

// Function for each pipeline stage
function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed");
        callback();
    }, 1000);
}

function celebrate(callback) {
    setTimeout(() => {
        console.log("5. Celebration time!");
        callback();
    }, 1000);
}

// Part 1: Using Nested Callbacks
console.log("Callback Hell Started");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate(() => {
                    console.log("Pipeline completed using callbacks!");
                });
            });
        });
    });
});

// Part 2: Using Async/Await

// Helper function returning a Promise
function runStage(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("Async/Await Pipeline Started");

    await runStage("1. Design completed");
    await runStage("2. Build completed");
    await runStage("3. Testing completed");
    await runStage("4. Deployment completed");
    await runStage("5. Celebration time!");

    console.log("Pipeline completed using async/await!");
}

runPipeline();

/*
Why async/await is better?

1. Code is clean and readable.
2. Avoids deeply nested callbacks.
3. await waits for Promise completion.
4. Errors can be handled using try/catch.
*/
