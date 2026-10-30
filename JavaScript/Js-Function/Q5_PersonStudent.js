function Person(name){
    this.name = name;
}

Person.prototype.showName = function(){
    console.log("Name:", this.name);
};

function Student(name, branch){
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = object.create(Person.prototype);

Student.prototype.constructor = Student;

Student.prototypes.showBranch = function(){
    console.log("Branch:", this.branch);
};

const student1 = new Student("Binit", "CSE");

student1.showNAme();
student1.showBranch();


console.log(student1 instanceof Student);
console.log(student1 instanceof Person);