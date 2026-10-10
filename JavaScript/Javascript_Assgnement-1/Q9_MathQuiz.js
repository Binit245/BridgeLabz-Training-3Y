
let number1 = Math.floor(Math.random() * 20) + 1;
let number2 = Math.floor(Math.random() * 20) + 1;

let operators = ["+", "-", "*", "/"];
let index = Math.floor(Math.random() * 4);
let operator = operators[index];
let answer;

switch (operator) {
    case "+":
        answer = number1 + number2;
        break;

    case "-":
        answer = number1 - number2;
        break;

    case "*":
        answer = number1 * number2;
        break;

    case "/":
        answer = number1 / number2;
        break;
}

console.log("Question: " + number1 + " " + operator + " " + number2);

if (operator === "/") {
    console.log("Correct Answer: " + answer.toFixed(2));
} else {
    console.log("Correct Answer: " + answer);
}