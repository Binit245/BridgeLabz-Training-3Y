
// Q9: Debugging the Event Loop

// Predicted Output:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

// Macrotask
setTimeout(() => {
    console.log("Timeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

/*
Explanation:

1. Synchronous statements execute first.
2. setTimeout callback goes to the macrotask queue.
3. Promise.then callback goes to the microtask queue.
4. Script execution finishes.
5. Microtasks execute before macrotasks.
6. Therefore, Promise callback prints before Timeout callback.
*/
