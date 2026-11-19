
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(this.name + " is doing general work.");
    }
}

// Manager inherits Employee
class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    // Overriding work() method
    work() {
        console.log(
            this.name + " is managing the " +
            this.department + " department."
        );
    }
}

// Creating objects
const employee1 = new Employee("Rahul", "IT");
const manager1 = new Manager("Amit", "HR");

// Runtime polymorphism
const employees = [employee1, manager1];

employees.forEach(employee => {
    console.log("Name:", employee.name);
    console.log("Department:", employee.department);
    employee.work();
});
