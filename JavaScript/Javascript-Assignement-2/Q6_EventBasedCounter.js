
let count = 0;

// Increase counter
function increment() {
    count++;
    console.log("Count after increment:", count);

    // Nested function accesses outer function scope
    function showCount() {
        console.log("Current count:", count);
    }

    showCount();
}

// Decrease counter
function decrement() {
    count--;
    console.log("Count after decrement:", count);
}

// Simulate clicks manually
increment();
increment();
decrement();

console.log("Final Count:", count);
