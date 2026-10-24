
"use strict";

console.log("===== HOISTING LAB =====");

// Original hoisting example
console.log(score); // undefined

announce(); // Works due to function hoisting

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log(status);
}

// Hoisting observations:
// var score is hoisted and initialized as undefined.
// Function declarations are fully hoisted.
// let status is hoisted but remains in TDZ
// until its declaration is executed.

console.log("\n===== FIXED VERSION =====");

let points = 50;
let gameStatus = "ready";

function displayGame() {
    console.log("Score:", points);
    console.log("Status:", gameStatus);
}

displayGame();

console.log("\n===== ARROW FUNCTION VERSION =====");

const announceArrow = () => {
    console.log("Game started using Arrow Function");
};

const startGameArrow = () => {
    console.log("Status:", gameStatus);
};

announceArrow();
startGameArrow();

// Arrow functions assigned to const cannot be
// called before initialization because of TDZ.

// Debug: Watch score, status, points and gameStatus.
