
"use strict";

const operations = [
    "add", "divide", "power", "root", "subtract"
];

const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculatorError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculatorError";
    }
}

console.log("===== SMART CALCULATOR =====");

for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "subtract":
                result = num1 - num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new CalculatorError("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = Math.pow(num1, num2);
                break;

            case "root":
                if (num1 < 0) {
                    throw new CalculatorError(
                        "Cannot find real square root of negative number"
                    );
                }
                result = Math.sqrt(num1);
                break;

            default:
                throw new InvalidOperationError(
                    "Unknown operation: " + operation
                );
        }

        console.log(`${operation}: ${result}`);

    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Root calculates the square root of num1.
// Try adding "multiply" to operations to test
// InvalidOperationError.
