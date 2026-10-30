function applyOperation(numbers, operation){
    return numbers.map(operation);
}
const numbers = [1,2,3,4];

const doubleNumbers = applyOperation(numbers, function(num){
    return num*2;
});

const squareNumbers = applyOperation(numbers, function (num){
    return num*num;
});

consol.log("Douubled:", doubleNumbers);
console.log("Squared:", squareNumbers);