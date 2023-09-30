let arr = [ 64, 34, 25, 12, 22, 90, 11 ]

function bubble_sort() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-i; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = temp
        }
    }
  }
  
  console.log(arr)
}
bubble_sort()