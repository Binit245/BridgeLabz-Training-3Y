

"use strict";

console.log("===== DEBUGGING MYSTERY =====");

function showMessage() {
    // Original code:
    // greeting = "Welcome";
    // This throws ReferenceError in strict mode
    // because greeting was not declared.

    // Fixed using let
    let greeting = "Welcome";

    console.log(greeting);
}

showMessage();

// greeting belongs to showMessage function scope.
// It cannot be accessed directly outside the function.

// Debugging:
// 1. Add breakpoint at let greeting.
// 2. Press F5 in VS Code.
// 3. Add greeting to WATCH.
// 4. Observe showMessage in CALL STACK.
// 5. Press F10 to execute the next line.
