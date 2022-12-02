// 1

function delete_copy(arr) {
    let res = arr.filter((i, j) => arr.indexOf(i) === j)
    return res
}

console.log(delete_copy([1,2,3,2]))

// 2

function sum_arr(arr) {
    let res = arr.reduce((start, end) => start+end)
    return res
}

console.log(sum_arr([1,2,3]))

// 3

function intersect_arr(arr1, arr2) {
    let res = arr1.filter(lambda => arr2.includes(lambda))
    return res
}

console.log(intersect_arr([1,2,3], [4,5,6]))

// 4

function bin_search(arr, elem) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === elem) {
            return middle;
        }
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
}

console.log(bin_search([1,2,3,12,23,45,67], 12))

// 5

function mergeArrays(array1, array2) {
    let merged = [];
    let i = 0;
    let j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            merged.push(array1[i]);
            i++;
        } else {
            merged.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        merged.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        merged.push(array2[j]);
        j++;
    }
    return merged;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let start = arr.slice(0, middle);
    let end = arr.slice(middle);
    return mergeArrays(mergeSort(start), mergeSort(end));
}

console.log(mergeSort([2, 12, 7, 27, 63, 6, 4]))