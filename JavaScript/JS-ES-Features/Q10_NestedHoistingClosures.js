
"use strict";

console.log("===== NESTED HOISTING =====");

function outer() {
    // Local count is hoisted as undefined
    console.log("Outer Count Before:", count);

    var count = 5;

    function inner() {
        // Separate local count is hoisted
        console.log("Inner Count Before:", count);

        var count = 10;

        console.log("Inner Count After:", count);
    }

    inner();

    console.log("Outer Count After:", count);
}

outer();

console.log("\n===== ARROW FUNCTION VERSION =====");

function outerArrow() {
    var count = 5;

    // Arrow function captures outer lexical scope
    const innerArrow = () => {
        console.log("Arrow Inner Count:", count);
    };

    innerArrow();
}

outerArrow();

console.log("\n===== CLOSURE EXAMPLE =====");

function createCounter() {
    let count = 0;

    return () => {
        count++;
        console.log("Counter:", count);
    };
}

const counter = createCounter();

counter();
counter();
counter();

// Original outer and inner have separate var bindings.
// Both first logs are undefined due to hoisting.
//
// The arrow version uses outer count because
// it does not declare its own count.
//
// Closure preserves access to count even after
// createCounter has returned.
//
// Debug Call Stack:
// Global -> outer -> inner -> outer -> Global
// Arrow version:
// Global -> outerArrow -> innerArrow -> Global
