//let arr = [1,2,4,5,2,7,5,9]
let arr = [0, 14, 0, 4, 7, 8, 3, 5, 7]


for(let i=0; i<arr.length/2; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length-i-1]
    arr[arr.length-i-1] = temp
}

console.log(arr)