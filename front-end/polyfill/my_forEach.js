const array = [1, 2, 3, 4];
array.forEach(function (element) {
    console.log(element);
})

Array.prototype.myForEach = function (func) {
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        func(element)
    }
}
array.myForEach(function (element) {
    console.log(element);
})