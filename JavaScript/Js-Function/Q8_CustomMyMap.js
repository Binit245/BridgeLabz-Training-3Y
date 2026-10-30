Array.prototype.myMap = function (callback) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Skip empty slots in sparse arrays
        if (index in this) {
            result.push(callback(this[index], index, this));
        }
    }

    return result;
};


const numbers = [1, 2, 3];

const doubled = numbers.myMap(function (num) {
    return num * 2;
});

console.log(doubled);
console.log(numbers);