
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidValues = [];

for (let i = 0; i < apiData.length; i++) {

    let value = apiData[i];

    // Convert data into different types
    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("\nRecord", i + 1);
    console.log("Original:", value);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    // Check invalid numbers and missing values
    if (isNaN(num) || value === null || value === undefined || value === " ") {
        invalidValues.push(value);
        console.log("Status: INVALID");
    } else {
        validNumbers.push(num);
        console.log("Status: VALID");
    }
}

console.log("\n===== FINAL REPORT =====");
console.log("Valid numeric data:", validNumbers);
console.log("Invalid data:", invalidValues);
console.log("Valid count:", validNumbers.length);
console.log("Invalid count:", invalidValues.length);
