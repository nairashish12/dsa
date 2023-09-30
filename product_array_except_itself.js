// let array = [10, 3, 5, 6, 2]

// // let product = new Array(array.length)
// let product = []

// for (let i = 0; i < array.length; i++) {
//     //const element = array[i];
//     let total = 1;

//     for (let j = 0; j < array.length; j++) {
//         if(i != j) {
//             total = total*array[j] 
//         }
//     }

//     // console.log(total)
//     product.push(total)
// }

// console.log(product)

// // [180, 600, 360, 300, 900]

let arr = [ 10, 3, 5, 6, 2 ];

let left_arr = new Array(arr.length)
let right_arr = new Array(arr.length)

left_arr[0] = 1
right_arr[arr.length] = 1
let temp = 1

for (let i = 1; i < arr.length; i++) {
    temp *= arr[i-1]
    left_arr[i] = temp
}
console.log(left_arr)

//[1, 10, 30, 150, 900]

temp = 1

for (let i = arr.length-1; i >= 0; i--) {
    temp *= arr[i+1]
    right_arr[i] = temp
}

// [180, 60, 12, 2, 1]

console.log(right_arr)