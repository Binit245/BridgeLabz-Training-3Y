
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

console.log("===== TRANSACTION VALIDATOR =====");

for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];

    try {
        // Check null transaction
        if (transaction === null) {
            throw new TypeError("Null transaction");
        }

        // Check missing properties
        if (transaction.id == null ||
            transaction.amount == null) {
            throw new Error("Missing id or amount");
        }

        // Check negative amount
        if (transaction.amount < 0) {
            throw new RangeError("Negative amount");
        }

        if (typeof transaction.amount !== "number" ||
            !Number.isFinite(transaction.amount)) {
            throw new TypeError("Invalid amount");
        }

        valid.push(transaction);

        console.log(`Transaction ${transaction.id}: SUCCESS`);

    } catch (error) {
        invalid.push({
            index: i,
            transaction: transaction,
            errorType: error.name,
            message: error.message
        });

        console.log(`Transaction Index ${i}: FAILED`);
        console.log("Error Type:", error.name);
        console.log("Reason:", error.message);
    }
}

console.log("\n===== FINAL REPORT =====");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful:", valid.length);
console.log("Failed:", invalid.length);

// Debug: Add breakpoint inside try block.
// Watch transaction, i, valid and invalid.
