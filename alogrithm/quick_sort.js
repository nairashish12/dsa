let arr = [12, 11, 13, 5, 6, 7]

function quick_sort(arr, low, high) {
    if(low < high) {
        let partition_index = partition(arr, low, high)

        quick_sort(arr, low, partition_index-1)
        quick_sort(arr, partition_index+1, high)
    }
}

function partition(arr, low, high) {
    let pivot = arr[high]
    let i = low-1

    for (let j = low; j < high; j++) {
        if(arr[j] < pivot) {
            i++
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    i++
    let temp = arr[i]
    arr[i] = arr[high]
    arr[high] = temp

    return i;
}

quick_sort(arr, 0, arr.length-1)
console.log(arr)