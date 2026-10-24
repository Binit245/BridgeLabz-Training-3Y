
"use strict";

console.log("===== STRICT MODE SHOWDOWN =====");

// Original code:
//
// function demo(a, a) {
//     total = 10;
//     delete total;
// }
//
// In non-strict mode, duplicate parameters are
// allowed in ordinary functions.
// Assignment to undeclared total may create a global.
// delete total returns false for a var-like global.
//
// In strict mode, duplicate parameters cause SyntaxError.
// Deleting a plain identifier also causes SyntaxError.
// Assignment to undeclared variables causes ReferenceError.

// Use eval to test invalid code without stopping this file.

const nonStrictCode = `
function demo(a, a) {
    total = 10;
    console.log("Total:", total);
    console.log("Delete result:", delete total);
}
demo(5, 10);
`;

const strictCode = `
"use strict";
function demo(a, a) {
    total = 10;
    delete total;
}
demo(5, 10);
`;

console.log("\nWithout Strict Mode:");

try {
    eval(nonStrictCode);
} catch (error) {
    console.log(error.name + ": " + error.message);
}

console.log("\nWith Strict Mode:");

try {
    eval(strictCode);
} catch (error) {
    console.log(error.name + ": " + error.message);
}

// Correct ES6 version
console.log("\n===== CORRECT ES6 VERSION =====");

const demo = (a, b) => {
    let total = 10;

    console.log("First Value:", a);
    console.log("Second Value:", b);
    console.log("Total:", total);

    // Delete an object property instead of a variable
    const data = { total: total };

    console.log("Before Delete:", data);

    delete data.total;

    console.log("After Delete:", data);
};

demo(5, 10);

// Strict mode requires declared variables.
// Duplicate parameter names are not allowed.
// Delete is intended for removable object properties.
