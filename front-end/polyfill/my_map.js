Array.prototype.myMap = function myMap(func) {
    let array = this;
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result.push(func(element));
    }
    return result;
}
let array = [1, 2, 3];
let arr1 = array.map(function (element) {
    return ++element;
});
let arr2 = array.myMap(function (element) {
    return ++element;
});
console.log(arr1);
console.log(arr2);