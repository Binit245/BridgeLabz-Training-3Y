
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 40000),
    new Employee(2, "Riya", "HR", 35000),
    new Employee(3, "Rahul", "Sales", 30000),
    new Employee(4, "Priya", "IT", 50000),
    new Employee(5, "Neha", "Finance", 45000)
];

console.log("Annual Salary of Employees:");

employees.forEach(employee => {
    console.log(
        `${employee.name}: ₹${employee.getAnnualSalary()}`
    );
});

employees[0].applyBonus(10);

console.log("\nAfter 10% bonus for Aman:");

console.log(employees[0].getAnnualSalary());

const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("\nTotal Annual Company Payout: ₹" + totalAnnualPayout);
