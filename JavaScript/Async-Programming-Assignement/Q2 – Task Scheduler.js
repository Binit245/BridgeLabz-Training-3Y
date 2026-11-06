
// Q2: Microtask vs Macrotask

console.log("Start");

// Macrotask
setTimeout(() => {
    console.log("setTimeout callback");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("Promise callback");
});

// Synchronous log
console.log("Synchronous task");

console.log("End");

/*
Explanation:

1. Synchronous code executes first.
2. Promise.then() creates a microtask.
3. setTimeout() creates a macrotask.
4. After synchronous code finishes,
   microtasks execute before macrotasks.

Expected Output:

Start
Synchronous task
End
Promise callback
setTimeout callback
*/
