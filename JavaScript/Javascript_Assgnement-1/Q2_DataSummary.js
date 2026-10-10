
let username = "Binit";
let age = 25;
let isstudent = true;
let subjects = ["Math", "Science", "English"];
let student ={name: "binit", age:25};
let address = null;
let result;

console.table([
    {Label: "Name",Value: username, Type: typeof username},
    {Label: "Age", value: age, Type: typeof age},
    {Label: "Student", Value: isstudent, Type: typeof isstudent},
    {Label:"Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects},
    {Label: "Object", Value: student, Type: typeof student},
    {Label: "Address", Value: address, Type: address === null ? "null" : typeof address},
    {Label: "Result", Value: result, Type:typeof result}
]);