

const scores = Array.from(
    {length : 8},
    () => Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let totalScore = scores.reduce((sum, score) => sum + score, 0);

let averageScore = totalScore / scores.length;

let passedStudents = scores.filter(score => score>=50);

console.log("Student Scores: ", scores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Students Passed:", passedStudents.length);


let studentReport = scores.map(
    (score, index) => 'student ${index+1}; ${score}'
);

console.log(studentReport.join("\n"));