

let expenses = [3000, 1000, 5000, 1500, 500];
let total = 0;

for (let i=0; i<expenses.length;i++){
    total+= expenses[i];
}

let average = total/expenses.length;
let tax =  total*10/100;
let finalAmount = total;
finalAmount += tax;

console.log("Total Expenses: Rs. " + total.toFixed(2));
console.log("Average Expenses: Rs. " + average.toFixed(2));
console.log("Tax: Rs. " + tax.toFixed(2));
console.log("Final Amount: Rs. " + finalAmount.toFixed(2));
