
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("===== EMPLOYEE BONUS REPORT =====");

for (let i = 0; i < employees.length; i++) {
    try {
        const employee = employees[i];

        // Check missing properties
        if (!employee ||
            employee.name == null ||
            employee.salary == null ||
            employee.years == null) {
            throw new Error("Missing employee details");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        // Validate converted numbers
        if (!Number.isFinite(salary) ||
            !Number.isFinite(years) ||
            salary < 0 || years < 0 ||
            String(employee.salary).trim() === "" ||
            String(employee.years).trim() === "") {
            throw new Error("Invalid salary or years");
        }

        const bonus = years > 3
            ? salary * 0.10
            : salary * 0.05;

        const totalSalary = salary + bonus;

        console.log(`
Employee: ${employee.name}
Salary: ${salary}
Experience: ${years} years
Bonus: ${bonus}
Total Salary: ${totalSalary}
-------------------------`);

    } catch (error) {
        console.log("Employee Error:", error.message);
    }
}

// Strict mode prevents accidental implicit globals.
// Debug: Watch salary, years, bonus and totalSalary.
