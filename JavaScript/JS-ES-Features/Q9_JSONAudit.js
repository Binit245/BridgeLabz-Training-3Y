
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

console.log("===== JSON AUDIT =====");

for (let i = 0; i < rawData.length; i++) {
    try {
        // Convert JSON string into JavaScript object
        const data = JSON.parse(rawData[i]);

        // Check required keys
        if (!Object.hasOwn(data, "user") ||
            !Object.hasOwn(data, "age")) {
            throw new Error("Missing user or age");
        }

        if (typeof data.user !== "string" ||
            data.user.trim() === "") {
            throw new Error("Invalid username");
        }

        // Convert age into Number
        const age = Number(data.age);

        if (data.age === null ||
            String(data.age).trim() === "" ||
            !Number.isInteger(age) ||
            age < 0) {
            throw new Error("Invalid age");
        }

        data.age = age;

        // Bonus: Filter under-18 users
        if (age < 18) {
            under18Users.push(data);
            console.log(`Line ${i + 1}: Under-18 user filtered`);
            continue;
        }

        cleanData.push(data);

        console.log(`Line ${i + 1}: Valid JSON`);
        console.log(data);

    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1}: ERROR - ${error.message}`);
    }
}

console.log("\n===== FINAL REPORT =====");
console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Under-18 Users:", under18Users);
console.log("Valid Adult Records:", cleanData.length);
console.log("Error Count:", errors.length);

// Debug: Watch i, data, age, cleanData and errors.
// On JSON.parse error, control moves directly to catch.
