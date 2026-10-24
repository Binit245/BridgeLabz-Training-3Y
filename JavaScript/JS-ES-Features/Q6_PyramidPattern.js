
"use strict";

console.log("===== PYRAMID PATTERN =====");

// Default number of rows
let userInput = 5;

// Change userInput to generate different rows
const rows = Number(userInput);

if (!Number.isInteger(rows) || rows <= 0) {
    console.log("Invalid input. Enter a positive integer.");
} else {
    console.log("\nUsing let:");

    for (let i = 1; i <= rows; i++) {
        let pattern = "";

        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }

        console.log(pattern.trimEnd());
    }

    console.log("\nUsing var:");

    for (var a = 1; a <= rows; a++) {
        var line = "";

        for (var b = 1; b <= a; b++) {
            line += "* ";
        }

        console.log(line.trimEnd());
    }

    console.log("\nFinal var a:", a);
    console.log("Final var b:", b);

    // let is block-scoped.
    // var is function-scoped or global-scoped.
    // Both loops generate the same pattern.
    // var loop variables remain accessible here.
}

// Strict mode prevents undeclared loop variables.
// Debug: Watch i, j, pattern, a, b and line.
