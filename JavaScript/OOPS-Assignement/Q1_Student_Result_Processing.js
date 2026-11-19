
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        return this.marks.reduce((total, mark) => total + mark, 0)
            / this.marks.length;
    }

    getGrade() {
        let average = this.calculateAverage();

        if (average >= 80) {
            return "A";
        } else if (average >= 60) {
            return "B";
        } else if (average >= 40) {
            return "C";
        } else {
            return "F";
        }
    }
}

// Creating objects for 3 students
const student1 = new Student("Rahul", [85, 90, 80]);
const student2 = new Student("Amit", [65, 70, 60]);
const student3 = new Student("Rohit", [30, 35, 25]);

const students = [student1, student2, student3];

students.forEach(student => {
    console.log("Name:", student.name);
    console.log("Average:", student.calculateAverage());
    console.log("Grade:", student.getGrade());
    console.log("--------------------");
});
