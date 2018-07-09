const array = [1, 2, 3, 4];
Array.prototype.myReduce = function (func, initial) {
    let result = initial ? initial : 0;
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        result = func(result, element);
    }
    return result;
}
let result = array.reduce(function (accumulator, element) {
    return accumulator + element;
}, 1)
console.log(result);
result = array.myReduce(function (accumulator, element) {
    return accumulator + element;
}, 1)
console.log(result);
