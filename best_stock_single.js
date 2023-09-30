let arr = [7, 1, 5, 3, 6, 4]
// let arr = [7, 6, 4, 3, 1]
let lowest_price = arr[0];
let lowest_index = 0
let max_price = 0
let max_index = 0

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < lowest_price) {
        lowest_price = arr[i]
        lowest_index = i
    }
    else if(arr[i] > max_price && i > lowest_index) {
        console.log(arr[i], max_price, i, lowest_index)
        max_price = arr[i]
        max_index = i+1
    }
}

console.log(max_index)

//ans = 5-1 = 4