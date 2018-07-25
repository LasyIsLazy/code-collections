function quick(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];
    let left = [];
    let right = [];
    array.forEach((element, index) => {
        if (index !== pivotIndex) {
            if (element < pivot) {
                left.push(element);
            } else {
                right.push(element);
            }
        }
    });
    return quick(left).concat(pivot, quick(right));
}
const array = [432, 524, 234, 513, 193, 511];
console.log(array);
console.log(quick(array));
