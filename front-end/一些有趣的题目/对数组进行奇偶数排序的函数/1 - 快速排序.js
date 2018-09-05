/**
 * 快速排序的思想
 * 一个指针从左往右搜，一个指针从右往左搜，当左边找到偶数，右边找到奇数时，交换两个数，然后继续查找，直到两个指针相遇
 */

let array = [1, 2, 3, 4, 5, 6, 7];
function sortArray(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
        if (array[leftIndex] % 2 === 0 && array[rightIndex] % 2 === 1) {
            // 左偶数，右奇数 => 交换
            [array[leftIndex], array[rightIndex]] = [
                array[rightIndex],
                array[leftIndex]
            ];
        }
        if (array[leftIndex] % 2 === 1) {
            // 奇数 => 下一个
            leftIndex++;
        }
        if (array[rightIndex] % 2 === 0) {
            // 偶数 => 下一个
            rightIndex--;
        }
    }
}
sortArray(array);
console.log(array);
