let array = [1, 2, 3, 4, 5, 6, 7];
function sortArray(array) {
    array.sort((a, b) => a % 2 === 0);
}
sortArray(array);
console.log(array);
