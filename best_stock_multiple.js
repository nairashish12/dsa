let arr = [7, 1, 5, 3, 6, 4]
let total_sum = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i] < arr[i+1]) {
        total_sum += (arr[i+1] - arr[i])
    }
}

console.log(total_sum)

//ans - 5 - 1 = 4, 6 - 3 = 3, 4 + 3 = 7