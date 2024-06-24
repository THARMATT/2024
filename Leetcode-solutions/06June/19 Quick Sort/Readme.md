# Quick Sort
function partition(l, h, arr) {
    let pivot = arr[l];
    let i = l;
    let j = h;

    while (i < j) {
        while (i < h && arr[i] <= pivot) { i++; }
        while (arr[j] > pivot) { j--; }
        if (i < j) {
            swap(arr, i, j);
        }
    }
    swap(arr, l, j);
    return j;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr, l, h) {
    if (l < h) {
        let j = partition(l, h, arr);
        quickSort(arr, l, j - 1);
        quickSort(arr, j + 1, h);
    }
}

// Example usage
let arr = [4, 2, 6, 9, 3];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
