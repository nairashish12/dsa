let arr = [12, 11, 13, 5, 6, 7]

function divide(arr, starting_index, ending_index) {
    //O(logn)
    if(starting_index >= ending_index) {
        return
    }
    let mid_index = Math.floor(starting_index + (ending_index - starting_index)/2);

    divide(arr, starting_index, mid_index)
    divide(arr, mid_index+1, ending_index)
    conquer(arr, starting_index, mid_index, ending_index)
}

function conquer(arr, starting_index, mid_index, ending_index) {
    //O(n)
    
    let merged_array = new Array(ending_index - starting_index+1)

    let index1 = starting_index
    let index2 = mid_index+1
    let x = 0

    while(index1 <= mid_index && index2 <= ending_index) {
        if(arr[index1] < arr[index2]) {
            merged_array[x] = arr[index1]
            x++;
            index1++;
        }
        else {
            merged_array[x] = arr[index2]
            x++;
            index2++;
        }
    }

    while(index1 <= mid_index) {
        merged_array[x] = arr[index1]
        x++;
        index1++;
    }

    while(index2 <= ending_index) {
        merged_array[x] = arr[index2]
        x++;
        index2++;
    }

    // console.log(merged_array)
    // Copy merged_array back to arr
    for (let i = 0; i < merged_array.length; i++) {
        arr[starting_index + i] = merged_array[i];
    }
    console.log(arr)
}

divide(arr, 0, arr.length-1)


//O(nlogn)