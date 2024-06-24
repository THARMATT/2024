

function partition(l, h, arr) {
    let pivot = arr[l];
    l = i;
    h = j;
    while (i < j) {
        do { i++ }
        while (arr[j] < pivot) { j-- }
        while (arr[j] > pivot) {
            if (i < j) {
                swap(arr[i], arr[j])
            }
            swap(pivot, arr[j])
        }
        return j
    }
}

function swap(i, j) {
    let temp = i;
    i = j;
    j = temp;
}

function quickSort(l, h) {
    if (l < h) {
        let j = partition(l, h);
        quickSort(l, j);
        quickSort(j + 1, h)
    }
}