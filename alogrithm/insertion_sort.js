let arr = [64, 25, 12, 22, 11]

function insertionSort() 
{
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i-1

        while(j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = key
    }
    console.log(arr)
} 

insertionSort()

