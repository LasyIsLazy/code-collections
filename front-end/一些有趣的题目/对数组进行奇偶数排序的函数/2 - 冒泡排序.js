/**
 * 冒泡排序的思想
 * 遍历n（数组长度）次，每次遍历比较所有相邻元素，如果两者为偶数在前，奇数在后，则交换两者位置。
 * 每次遍历保证了第（n-遍历次数）个元素处在了正确的位置。
 */

let array = [1, 2, 3, 4, 5, 6, 7];
function sortArray(array) {
    const n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (array[j] % 2 === 0 && array[j + 1] % 2 === 1) {
                // 偶数在前，奇数在后 => 交换位置
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}
sortArray(array);
console.log(array);
