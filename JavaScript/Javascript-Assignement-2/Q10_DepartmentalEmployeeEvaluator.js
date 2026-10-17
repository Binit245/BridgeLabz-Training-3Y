
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

// Evaluate each department
for (let department of departments) {
    let name = department[0];
    let score = department[1];
    let performance;

    // Nested if-else conditions
    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    console.log(`${name}: Score = ${score}, Performance = ${performance}`);
}
